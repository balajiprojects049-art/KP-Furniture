import React from 'react';
import { Hammer, PenTool, RefreshCw, Sofa, Briefcase, Settings, CheckCircle2, Truck, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: Sofa,
            title: "Custom Manufacturing",
            desc: "We build premium sofas, beds, and dining sets from scratch using Grade-A teak wood and premium fabrics."
        },
        {
            id: 2,
            icon: PenTool,
            title: "Bespoke Design",
            desc: "Have a specific design? We bring your vision to life. From sketches to the final product, tailored to your space."
        },
        {
            id: 3,
            icon: RefreshCw,
            title: "Restoration & Repair",
            desc: "Expert reupholstery, structural fixes, and wood polishing to make your beloved furniture look brand new."
        },
        {
            id: 4,
            icon: Settings,
            title: "Modular Solutions",
            desc: "Space-saving modular kitchens, wardrobes, and TV units designed for modern, compact living."
        },
        {
            id: 5,
            icon: Briefcase,
            title: "Office Furnishing",
            desc: "Ergonomic chairs, executive desks, and conference tables built for productivity and comfort."
        },
        {
            id: 6,
            icon: Hammer,
            title: "Installation & Support",
            desc: "Hassle-free delivery and professional on-site installation so you can enjoy your furniture immediately."
        }
    ];

    const features = [
        { icon: Star, text: "Premium Quality Materials" },
        { icon: Truck, text: "Doorstep Delivery" },
        { icon: CheckCircle2, text: "5-Year Warranty Support" },
        { icon: Phone, text: "24/7 Customer Support" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative bg-slate-900 py-24 sm:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=2000"
                        alt="Workshop"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                        CRAFTSMANSHIP AT ITS BEST
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Expert <span className="text-blue-500">Services</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        From custom designs to expert restoration, we provide comprehensive furniture solutions tailored to your unique needs.
                    </p>
                </div>
            </div>

            {/* Services Grid - Floating Over Hero */}
            <div className="relative z-20 container mx-auto px-4 -mt-16 sm:-mt-24 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="group bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Why Choose KP Furniture?
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                We combine traditional craftsmanship with modern technology to deliver furniture that stands the test of time. Our commitment to quality and customer satisfaction is unwavering.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="text-green-500">
                                            <feature.icon size={24} className="fill-current bg-green-50 rounded-full p-1 w-8 h-8" />
                                        </div>
                                        <span className="font-semibold text-slate-700">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=1000"
                                    alt="Detailed Craftsmanship"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                                <p className="text-4xl font-bold mb-1">15+</p>
                                <p className="text-sm font-medium opacity-90">Years of<br />Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2000"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-blue-900/20"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Whether it's a home makeover or a new office setup, our team is here to help you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                            Start a Project
                        </Link>
                        <a href="https://wa.me/919490032763" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
