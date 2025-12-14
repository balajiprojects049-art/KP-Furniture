import React, { useState } from 'react';
import { MessageCircle, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { generateWhatsAppLink } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const whatsappLink = generateWhatsAppLink(product.name);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const hasMultipleImages = product.images && product.images.length > 1;

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className="card group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">

            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-white group/image">
                <img
                    src={hasMultipleImages ? product.images[currentImageIndex] : product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />

                {hasMultipleImages && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-md opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white"
                        >
                            <ChevronLeft size={20} className="text-gray-700" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-md opacity-0 group-hover/image:opacity-100 transition-opacity hover:bg-white"
                        >
                            <ChevronRight size={20} className="text-gray-700" />
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {product.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm z-10">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">
                    {product.description}
                </p>

                <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wide">Price On Request</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleAddToCart}
                            className={`btn flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${added
                                ? 'bg-green-600 text-white shadow-green-100'
                                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-100'
                                }`}
                        >
                            <ShoppingCart size={18} />
                            {added ? 'Added' : 'Add to Cart'}
                        </button>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bg-[#25D366] hover:bg-[#20b858] text-white flex items-center justify-center gap-2 py-3 rounded-xl font-semibold shadow-emerald-100 transition-all"
                        >
                            <MessageCircle size={18} />
                            Buy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
