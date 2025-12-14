import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts, categories as initialCategories } from '../data/products';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts);
    const [categories, setCategories] = useState(initialCategories);

    // Check if we're on admin routes
    const isAdminRoute = () => {
        return window.location.pathname.startsWith('/admin');
    };

    // Initialize from LocalStorage ONLY on admin pages
    useEffect(() => {
        // Only load from localStorage if on admin routes
        if (isAdminRoute()) {
            const savedProducts = localStorage.getItem('kp_furniture_products');
            if (savedProducts) {
                try {
                    const parsed = JSON.parse(savedProducts);
                    // Basic validation: ensure it's an array
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        setProducts(parsed);
                    }
                } catch (e) {
                    console.error("Failed to load products from storage", e);
                }
            }
        } else {
            // For regular customers, always use products.js
            setProducts(initialProducts);
        }
    }, []);

    // Function to update a product (used by Admin Panel)
    const updateProduct = (updatedProduct) => {
        const newProducts = products.map(p =>
            p.id === updatedProduct.id ? updatedProduct : p
        );
        setProducts(newProducts);
        // Save to local storage so it persists on reload (for admin only)
        localStorage.setItem('kp_furniture_products', JSON.stringify(newProducts));
    };

    // Function to add a new product
    const addProduct = (newProduct) => {
        // Generate new ID by finding the max ID and adding 1
        const maxId = products.reduce((max, p) => Math.max(max, p.id), 0);
        const productWithId = { ...newProduct, id: maxId + 1 };
        const newProducts = [...products, productWithId];
        setProducts(newProducts);
        localStorage.setItem('kp_furniture_products', JSON.stringify(newProducts));
        return productWithId; // Return the created product with its ID
    };

    // Function to delete a product
    const deleteProduct = (productId) => {
        const newProducts = products.filter(p => p.id !== productId);
        setProducts(newProducts);
        localStorage.setItem('kp_furniture_products', JSON.stringify(newProducts));
    };

    return (
        <ProductContext.Provider value={{ products, categories, updateProduct, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
