import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, MessageCircle, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "919490032357";
        let message = "Hi KP Furniture, I would like to place an order for the following items:\n\n";

        cart.forEach((item, index) => {
            message += `${index + 1}. *${item.name}* \n   Quantity: ${item.quantity}\n`;
            if (item.subCategory) {
                message += `   Type: ${item.subCategory}\n`;
            }
            message += `\n`;
        });

        message += `\nPlease confirm availability and total price.`;

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
                <div className="bg-gray-100 p-6 rounded-full mb-4">
                    <ShoppingBag size={48} className="text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-8 text-center max-w-md">
                    Looks like you haven't added anything yet.
                    Explore our collection to find the perfect furniture for your space.
                </p>
                <Link to="/products" className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex items-center gap-2">
                    <ArrowLeft size={20} /> Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/products" className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <ArrowLeft size={24} className="text-gray-600" />
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Shopping Cart ({getCartTotal()} items)</h1>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Cart Items List */}
                    <div className="divide-y divide-gray-100">
                        {cart.map((item) => (
                            <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6 group hover:bg-gray-50/50 transition-colors">
                                {/* Image */}
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mb-1 capitalize">Category: {item.category}</p>
                                    {item.subCategory && (
                                        <p className="text-xs text-blue-600 font-medium bg-blue-50 inline-block px-2 py-1 rounded mb-2">
                                            {item.subCategory}
                                        </p>
                                    )}
                                </div>

                                {/* Controls */}
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    {/* Quantity */}
                                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="p-2 hover:bg-white rounded-md text-gray-600 transition-shadow hover:shadow-sm"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-10 text-center font-semibold text-gray-900">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="p-2 hover:bg-white rounded-md text-gray-600 transition-shadow hover:shadow-sm"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Remove Item"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer / Checkout Actions */}
                    <div className="bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <button
                            onClick={clearCart}
                            className="text-gray-500 hover:text-red-600 text-sm font-medium underline underline-offset-4 transition-colors"
                        >
                            Clear Cart
                        </button>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link
                                to="/products"
                                className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-white hover:border-gray-400 transition-all text-center"
                            >
                                Continue Shopping
                            </Link>
                            <button
                                onClick={handleWhatsAppCheckout}
                                className="px-8 py-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-xl font-bold shadow-lg shadow-green-200 flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
                            >
                                <MessageCircle size={20} />
                                Checkout on WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
