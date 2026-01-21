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
          INSERT INTO products (id, name, category, sub_category, description, price, image_1, image_2, image_3, image_4)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `;
            const values = [
                product.id,
                product.name,
                product.category,
                product.subCategory,
                product.description,
                product.price,
                imageToStore, // image_1
                null,         // image_2
                null,         // image_3
                null          // image_4
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
        image_1 TEXT,
        image_2 TEXT,
        image_3 TEXT,
        image_4 TEXT,
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

// SAFE MIGRATION: Add 4-image support WITHOUT deleting old data
app.get('/api/migrate-to-4-images', async (req, res) => {
    try {
        console.log('Starting SAFE migration to 4-image structure...');

        // Step 1: Check if migration is needed
        const checkColumns = await pool.query(`
            SELECT column_name 
            FROM information_schema.columns 
            WHERE table_name = 'products' AND column_name IN ('image_1', 'image_2', 'image_3', 'image_4', 'image')
        `);

        const existingColumns = checkColumns.rows.map(row => row.column_name);
        console.log('Existing columns:', existingColumns);

        // Step 2: Add new columns if they don't exist
        const columnsToAdd = ['image_1', 'image_2', 'image_3', 'image_4'];
        let addedColumns = [];

        for (const col of columnsToAdd) {
            if (!existingColumns.includes(col)) {
                await pool.query(`ALTER TABLE products ADD COLUMN ${col} TEXT`);
                addedColumns.push(col);
                console.log(`✅ Added column: ${col}`);
            } else {
                console.log(`ℹ️  Column ${col} already exists`);
            }
        }

        // Step 3: Migrate data from 'image' to 'image_1' (if 'image' column exists)
        if (existingColumns.includes('image')) {
            const migrateResult = await pool.query(`
                UPDATE products 
                SET image_1 = image 
                WHERE image IS NOT NULL AND (image_1 IS NULL OR image_1 = '')
            `);
            console.log(`✅ Migrated ${migrateResult.rowCount} rows from 'image' to 'image_1'`);
        }

        // Step 4: Count total products
        const countResult = await pool.query('SELECT COUNT(*) FROM products');
        const totalProducts = countResult.rows[0].count;

        res.json({
            success: true,
            message: '✅ SAFE migration completed successfully!',
            details: {
                columnsAdded: addedColumns,
                totalProducts: totalProducts,
                note: 'Old "image" column kept as backup. All data is safe!'
            }
        });

    } catch (error) {
        console.error('Migration error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            note: 'Migration failed. No data was deleted.'
        });
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
        const products = result.rows.map(row => {
            // Combine all images into an array, filter out nulls
            const images = [row.image_1, row.image_2, row.image_3, row.image_4].filter(img => img);

            return {
                id: row.id,
                name: row.name,
                category: row.category,
                subCategory: row.sub_category,
                description: row.description,
                price: row.price,
                image: images[0] || '', // First image as main
                images: images // All images as array
            };
        });
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
        const { name, category, subCategory, description, price, image_1, image_2, image_3, image_4 } = req.body;

        // Process each image (Upload to Cloudinary OR keep as Base64)
        const processedImage1 = await handleImageUpload(image_1);
        const processedImage2 = await handleImageUpload(image_2);
        const processedImage3 = await handleImageUpload(image_3);
        const processedImage4 = await handleImageUpload(image_4);

        const query = `
      INSERT INTO products (name, category, sub_category, description, price, image_1, image_2, image_3, image_4)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `;
        const values = [name, category, subCategory, description, price, processedImage1, processedImage2, processedImage3, processedImage4];
        const result = await pool.query(query, values);

        const newProduct = result.rows[0];
        const images = [newProduct.image_1, newProduct.image_2, newProduct.image_3, newProduct.image_4].filter(img => img);

        res.json({
            id: newProduct.id,
            name: newProduct.name,
            category: newProduct.category,
            subCategory: newProduct.sub_category,
            description: newProduct.description,
            price: newProduct.price,
            image: images[0] || '',
            images: images
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Update Product
app.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, category, subCategory, description, price, image_1, image_2, image_3, image_4 } = req.body;

    try {
        // Process each image (Upload to Cloudinary OR keep as Base64/Url)
        const processedImage1 = await handleImageUpload(image_1);
        const processedImage2 = await handleImageUpload(image_2);
        const processedImage3 = await handleImageUpload(image_3);
        const processedImage4 = await handleImageUpload(image_4);

        const query = `
        UPDATE products 
        SET name = $1, category = $2, sub_category = $3, description = $4, price = $5, 
            image_1 = $6, image_2 = $7, image_3 = $8, image_4 = $9
        WHERE id = $10
        RETURNING *
      `;
        const values = [name, category, subCategory, description, price, processedImage1, processedImage2, processedImage3, processedImage4, id];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const updated = result.rows[0];
        const images = [updated.image_1, updated.image_2, updated.image_3, updated.image_4].filter(img => img);

        res.json({
            id: updated.id,
            name: updated.name,
            category: updated.category,
            subCategory: updated.sub_category,
            description: updated.description,
            price: updated.price,
            image: images[0] || '',
            images: images
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
