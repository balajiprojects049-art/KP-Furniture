import React, { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts, categories as initialCategories } from '../data/products';

const ProductContext = createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts);
    const [categories, setCategories] = useState(initialCategories);

    // Fetch products from API on mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setProducts(data);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Function to update a product
    const updateProduct = async (updatedProduct) => {
        try {
            const response = await fetch(`/api/products/${updatedProduct.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProduct)
            });

            if (response.ok) {
                const data = await response.json();
                setProducts(products.map(p => p.id === data.id ? data : p));
            }
        } catch (error) {
            console.error("Failed to update product:", error);
        }
    };

    // Function to add a new product
    const addProduct = async (newProduct) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });

            if (response.ok) {
                const data = await response.json();
                setProducts([data, ...products]); // Add to top
                return data;
            }
        } catch (error) {
            console.error("Failed to add product:", error);
        }
    };

    // Function to delete a product
    const deleteProduct = async (productId) => {
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setProducts(products.filter(p => p.id !== productId));
            }
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, categories, updateProduct, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
