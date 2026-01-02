import express from 'express';
import cors from 'cors';
import pool from './db.js';
import dotenv from 'dotenv';
import { products as initialProducts } from '../src/data/products.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' })); // Increased limit for images

// Seed Database with Initial Data
app.get('/api/seed-db', async (req, res) => {
    try {
        console.log('Starting seed request...');

        // Explicitly TRUNCATE to restore "old data" from scratch
        console.log('Truncating table...');
        await pool.query('TRUNCATE TABLE products RESTART IDENTITY');

        // Check if products loaded
        if (!initialProducts || initialProducts.length === 0) {
            console.log('No initial products found in import.');
            return res.status(500).json({ error: 'No initial products found.' });
        }

        console.log(`Found ${initialProducts.length} products to insert.`);
        let insertedCount = 0;

        for (const product of initialProducts) {
            // Handle images array if present, fallback to single image
            const imageToStore = product.image || (product.images && product.images.length > 0 ? product.images[0] : '');

            const query = `
          INSERT INTO products (id, name, category, sub_category, description, price, image)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
            const values = [
                product.id,
                product.name,
                product.category,
                product.subCategory, // Note: frontend uses subCategory, DB uses sub_category. 
                product.description,
                product.price,
                imageToStore
            ];

            await pool.query(query, values);
            insertedCount++;
        }

        // Update the sequence to the max ID so new manual adds don't conflict
        await pool.query("SELECT setval(pg_get_serial_sequence('products', 'id'), (SELECT MAX(id) FROM products))");

        console.log(`Successfully inserted ${insertedCount} products.`);
        res.json({ message: `Seeding complete. Restored ${insertedCount} products.` });
    } catch (error) {
        console.error('Seeding error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Initialize Database Table
app.get('/api/init-db', async (req, res) => {
    try {
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        sub_category VARCHAR(100),
        description TEXT,
        price VARCHAR(50),
        image TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
        await pool.query(createTableQuery);
        res.json({ message: 'Database initialized successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Admin Login
app.post('/api/admin/login', async (req, res) => {
    const { password } = req.body;
    // In a real app, use bcrypt and store hash in DB. 
    // For this request, we are securing the check on the backend.
    if (password === 'admin123') {
        res.json({ success: true, token: 'mock-jwt-token' });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Get All Products
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
        // Transform keys to match frontend expectation (camelCase)
        const products = result.rows.map(row => ({
            id: row.id,
            name: row.name,
            category: row.category,
            subCategory: row.sub_category,
            description: row.description,
            price: row.price,
            image: row.image
        }));
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary (will use .env variables if present)
if (process.env.CLOUDINARY_CLOUD_NAME) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    console.log('Cloudinary configuration found and applied.');
}

// Helper to handle image upload
async function handleImageUpload(imageString) {
    // 1. If no image or not base64, return as is (could be existing URL)
    if (!imageString || !imageString.startsWith('data:')) {
        return imageString;
    }

    // 2. If Cloudinary is configured, upload there
    if (process.env.CLOUDINARY_CLOUD_NAME) {
        try {
            const uploadResult = await cloudinary.uploader.upload(imageString, {
                folder: 'kp-furniture',
                resource_type: 'image'
            });
            console.log('Image uploaded to Cloudinary:', uploadResult.secure_url);
            return uploadResult.secure_url;
        } catch (error) {
            console.error('Cloudinary upload failed:', error);
            // Fallback: return original string (save to DB) or throw
            throw new Error('Image upload failed');
        }
    }

    // 3. Fallback: Save Base64 to Database (Current Method)
    return imageString;
}

// Add Product
app.post('/api/products', async (req, res) => {
    try {
        const { name, category, subCategory, description, price, image } = req.body;

        // Process image (Upload to Cloudinary OR keep as Base64)
        const diffOptimizedImage = await handleImageUpload(image);

        const query = `
      INSERT INTO products (name, category, sub_category, description, price, image)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
        const values = [name, category, subCategory, description, price, diffOptimizedImage];
        const result = await pool.query(query, values);

        const newProduct = result.rows[0];
        res.json({
            id: newProduct.id,
            name: newProduct.name,
            category: newProduct.category,
            subCategory: newProduct.sub_category,
            description: newProduct.description,
            price: newProduct.price,
            image: newProduct.image
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Update Product
app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, category, subCategory, description, price, image } = req.body;

    try {
        let query;
        let values;

        // Process image (Upload to Cloudinary OR keep as Base64/Url)
        const finalImage = await handleImageUpload(image);

        if (finalImage) {
            query = `
        UPDATE products 
        SET name = $1, category = $2, sub_category = $3, description = $4, price = $5, image = $6
        WHERE id = $7
        RETURNING *
      `;
            values = [name, category, subCategory, description, price, finalImage, id];
        } else {
            // Fallback for null image
            query = `
        UPDATE products 
        SET name = $1, category = $2, sub_category = $3, description = $4, price = $5
        WHERE id = $6
        RETURNING *
      `;
            values = [name, category, subCategory, description, price, id];
        }

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const updated = result.rows[0];
        res.json({
            id: updated.id,
            name: updated.name,
            category: updated.category,
            subCategory: updated.sub_category,
            description: updated.description,
            price: updated.price,
            image: updated.image
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Delete Product
app.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Export for Vercel
export default app;

// Run server locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
