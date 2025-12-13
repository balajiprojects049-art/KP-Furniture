import React, { useState, useEffect } from 'react'; // Added useEffect
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter } from 'lucide-react';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [activeCategory, setActiveCategory] = useState('all');
    const [activeSubCategory, setActiveSubCategory] = useState('all');

    // Sync state with URL param on mount and update
    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);
        } else {
            setActiveCategory('all');
        }
        setActiveSubCategory('all'); // Reset sub-category on main category change
    }, [categoryParam]);

    const filteredProducts = products.filter(p => {
        if (activeCategory === 'all') return true;
        if (p.category !== activeCategory) return false;
        if (activeSubCategory !== 'all' && p.subCategory !== activeSubCategory) return false;
        return true;
    });

    const handleCategoryChange = (id) => {
        setActiveCategory(id);
        setActiveSubCategory('all');
        setSearchParams({ category: id });
        if (id === 'all') setSearchParams({});
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Header for Products */}
            <div className="relative bg-slate-900 py-16 sm:py-24 text-center overflow-hidden mb-10">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
                        alt="Furniture Collection"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                <div className="relative z-20 container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Curated <span className="text-blue-400">Collections</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Explore our wide range of premium furniture, meticulously crafted to elevate your living and workspaces.
                    </p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
                <div className="container mx-auto px-4">
                    {/* Main Categories */}
                    <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 justify-start md:justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform scale-100 hover:scale-105 ${activeCategory === cat.id
                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 ring-2 ring-offset-2 ring-slate-900'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-slate-50'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Sub-Category Tabs */}
                    {categories.find(c => c.id === activeCategory)?.subCategories && (
                        <div className="flex gap-3 overflow-x-auto mt-4 py-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 justify-start md:justify-center animate-fade-in">
                            <button
                                onClick={() => setActiveSubCategory('all')}
                                className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${activeSubCategory === 'all'
                                    ? 'bg-blue-50 text-blue-700 border-blue-200 ring-1 ring-blue-200'
                                    : 'bg-transparent text-slate-500 border-transparent hover:bg-slate-100'
                                    }`}
                            >
                                All {categories.find(c => c.id === activeCategory).name}
                            </button>
                            {categories.find(c => c.id === activeCategory).subCategories.map((sub) => (
                                <button
                                    key={sub.id}
                                    onClick={() => setActiveSubCategory(sub.id)}
                                    className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${activeSubCategory === sub.id
                                        ? 'bg-blue-50 text-blue-700 border-blue-200 ring-1 ring-blue-200'
                                        : 'bg-transparent text-slate-500 border-transparent hover:bg-slate-100'
                                        }`}
                                >
                                    {sub.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-4 py-16">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="h-full">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-lg font-light">
                            No products found in this category.
                        </p>
                        <button
                            onClick={() => handleCategoryChange('all')}
                            className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
                        >
                            View all products
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
