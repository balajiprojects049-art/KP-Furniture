import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />

            {/* Sticky WhatsApp Button */}
            <a
                href="https://wa.me/919490032763"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20b858] hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} className="fill-current" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium text-sm">
                    Chat with us
                </span>
            </a>
        </div>
    );
};

export default Layout;
