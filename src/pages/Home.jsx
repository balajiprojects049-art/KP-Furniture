import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Truck, Hammer, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useProductContext } from '../context/ProductContext';

const Home = () => {
    const { products, categories } = useProductContext();
    const featuredProducts = products.slice(0, 4);

    const heroImages = [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000", // Sofa
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2000", // Cot/Bed
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=2000", // Dining Table
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2000", // Mattress
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000", // Office
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"  // General Luxury Ambiance
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-fade-in">

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-900">

                {/* Background Carousel */}
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Elegant Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                    </div>
                ))}

                {/* Content Container - Glassmorphism */}
                <div className="container relative z-30 px-4 pt-20">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white mb-8 animate-fade-in shadow-2xl">
                            <Star size={16} className="text-yellow-400 fill-current" />
                            <span className="text-sm font-medium tracking-wide">#1 Furniture Manufacturer in Guntur</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight drop-shadow-2xl">
                            Crafting Comfort, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                                Defining Your Style
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
                            Transform your space with premium, custom-built furniture.
                            From luxurious sofas to ergonomic office setups, we create pieces that last a lifetime.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                to="/products"
                                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                            >
                                Explore Collection <ArrowRight size={20} />
                            </Link>
                            <a
                                href="https://wa.me/919490032763"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white hover:text-blue-900 text-white border-2 border-white rounded-full font-bold text-lg transition-all flex items-center justify-center"
                            >
                                Custom Order
                            </a>
                        </div>

                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </section>

            {/* Features / Trust Badges */}
            <section className="py-16 bg-slate-50 relative z-30">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { icon: Award, title: "Premium Quality", desc: "Finest materials & finish" },
                            { icon: Hammer, title: "Custom Design", desc: "Tailored to your needs" },
                            { icon: CheckCircle2, title: "5 Year Warranty", desc: "Durability assured" },
                            { icon: Truck, title: "Quick Delivery", desc: "Safe doorstep shipping" },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="section bg-white">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="heading-lg text-gray-900 mb-2">Browse Categories</h2>
                            <p className="text-gray-600">Find the perfect piece for every room.</p>
                        </div>
                        <Link to="/products" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:translate-x-1 transition-transform">
                            View All <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Category Images Map Configuration */}
                        {categories.filter(c => c.id !== 'all').map((cat) => {
                            // Map categories to specific high-quality Unsplash images
                            const categoryImages = {
                                'sofa-l-shape': "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
                                'sofa-u-shape': "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=600",
                                'sofa-3-1-1': "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600",
                                'sofa-long': "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=600",
                                'cots': "/categories/cots-category.png",
                                'mattresses': "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=600",
                                'dining': "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=600",
                                'office-tables': "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600",
                                'visitor-chairs': "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=600",
                                'teapoys': "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=600",
                                'boss-chairs': "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600"
                            };

                            return (
                                <Link to={`/products?category=${cat.id}`} key={cat.id} className="group relative h-60 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                                    <div className="absolute inset-0 bg-gray-900" />
                                    <img
                                        src={categoryImages[cat.id] || "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600"}
                                        alt={cat.name}
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
                                    <div className="absolute bottom-5 left-5 right-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{cat.name}</h3>
                                        <span className="text-sm text-blue-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-1">
                                            View Collection <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="heading-lg mb-4">Featured Collections</h2>
                        <p className="text-gray-600 text-lg">
                            Check out our latest masterpieces, crafted with passion and precision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link to="/products" className="btn btn-outline border-gray-300 hover:border-blue-600 hover:bg-blue-600 px-10 py-3 rounded-full text-lg font-medium transition-all">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2000"
                        alt="Custom Design Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>
                </div>
                <div className="container text-center relative z-10">
                    <h2 className="heading-xl mb-6">Need a Custom Design?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
                        We specialize in bringing your unique ideas to life. Stick to your style, not just what's in stock.
                    </p>
                    <a href="https://wa.me/919490032763" className="btn bg-white text-blue-600 hover:bg-gray-100 hover:shadow-2xl hover:shadow-blue-900/50 px-12 py-5 rounded-full text-xl font-bold transition-all transform hover:-translate-y-1">
                        Start Your Custom Order
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
