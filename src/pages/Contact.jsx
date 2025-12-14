import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Extended Dark Hero Section */}
            <div className="relative bg-slate-900 pb-20 pt-24 sm:pt-32 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Us Background"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Get in <span className="text-blue-500">Touch</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                        Whether you have a question about our products, need a custom quote, or want to visit our showroom, we are here to help.
                    </p>
                </div>
            </div>

            {/* Overlapping Contact Content */}
            <div className="container mx-auto px-4 -mt-16 sm:-mt-24 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Floating Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Card 1: Address */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100/50 backdrop-blur-sm group hover:-translate-y-1 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Visit Showroom</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                        Door No: 56-3-295<br />
                                        100ft Road, Auto Nagar Lorry Stand<br />
                                        Guntur Village, Guntur East<br />
                                        Guntur District – 522001
                                    </p>
                                    <a href="https://www.google.com/maps/search/?api=1&query=KP+Furniture+Guntur+Auto+Nagar" target="_blank" rel="noopener" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:underline gap-1">
                                        <Navigation size={14} /> Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Contact */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100/50 group hover:-translate-y-1 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Call Us</h3>
                                    <div className="flex flex-col gap-2">
                                        <a href="tel:9490032357" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                                            +91 94900 32763 <span className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full ml-2">Business</span>
                                        </a>
                                        <a href="tel:9490032357" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                                            +91 94900 32357
                                        </a>
                                        <a href="tel:9110543591" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                                            +91 91105 43591
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Hours */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100/50 group hover:-translate-y-1 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-2">Business Hours</h3>
                                    <ul className="text-slate-500 text-sm space-y-2">
                                        <li className="flex justify-between w-full min-w-[200px]">
                                            <span>Mon – Fri</span>
                                            <span className="font-medium text-slate-700">9:00 AM – 9:00 PM</span>
                                        </li>
                                        <li className="flex justify-between w-full min-w-[200px]">
                                            <span>Saturday</span>
                                            <span className="font-medium text-slate-700">10:00 AM – 5:00 PM</span>
                                        </li>
                                        <li className="flex justify-between w-full min-w-[200px]">
                                            <span>Sunday</span>
                                            <span className="font-medium text-slate-700">10:00 AM – 5:00 PM</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area: Map & CTA */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Map Container */}
                        <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 h-[500px] relative overflow-hidden group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1872.4839556157078!2d80.46337203856519!3d16.29946499696492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE3JzU4LjEiTiA4MMKwMjcnNTIuMCJF!5e1!3m2!1sen!2sin!4v1734080100000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="KP Furniture Location"
                                className="rounded-2xl w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg hidden sm:block">
                                <span className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    Open Now
                                </span>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Prefer to Chat?</h2>
                                    <p className="text-blue-100 max-w-md">
                                        Send us a message on WhatsApp for quick responses, product photos, and instant quotes.
                                    </p>
                                </div>
                                <a
                                    href="https://wa.me/919490032357"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-3 shrink-0"
                                >
                                    <MessageSquare size={20} />
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
