import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="KP Furniture" className="h-10 w-auto rounded-sm brightness-90" />
                            <span className="text-xl font-bold text-white">KP Furniture</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Premium custom furniture manufacturing and repair services.
                            Crafting excellence for your homes and offices since 1998.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/products" className="hover:text-blue-400 transition-colors">Our Products</Link></li>
                            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Furniture</h3>
                        <ul className="space-y-4">
                            <li><Link to="/products?category=sofas" className="hover:text-blue-400 transition-colors">Sofas & Lounges</Link></li>
                            <li><Link to="/products?category=cots" className="hover:text-blue-400 transition-colors">Cots & Beds</Link></li>
                            <li><Link to="/products?category=mattresses" className="hover:text-blue-400 transition-colors">Mattresses</Link></li>
                            <li><Link to="/products?category=dining" className="hover:text-blue-400 transition-colors">Dining Tables</Link></li>
                            <li><Link to="/products?category=office-tables" className="hover:text-blue-400 transition-colors">Office Tables</Link></li>
                            <li><Link to="/products?category=boss-chairs" className="hover:text-blue-400 transition-colors">Boss Chairs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-blue-500 mt-1" size={18} />
                                <span>Door No: 56-3-295, 100ft Road, Auto Nagar Lorry Stand, Guntur - 522001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-blue-500" size={18} />
                                <div className="flex flex-col">
                                    <a href="tel:9490032763" className="hover:text-white transition-colors">9490032763</a>
                                    <a href="tel:9490032357" className="hover:text-white transition-colors">9490032357</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-blue-500" size={18} />
                                <a href="mailto:Venkateshofficial1998@gmail.com" className="hover:text-white transition-colors break-all">Venkateshofficial1998@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} KP Furniture Manufacturing. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
