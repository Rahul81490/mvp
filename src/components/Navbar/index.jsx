import React, { useState } from 'react';
import logo from '../../assets/logo.png' 

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setSidebarOpen(false); // Close the sidebar after clicking a link
    };

    return (
        <div className="relative bg-gray-100">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {/* Your logo or brand */}
                                <img src={logo} alt="Logo" className="h-1- w-20" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a 
                                        href="#home" 
                                        onClick={() => handleLinkClick('#home')}
                                        className={`${activeLink === '#home' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
                                    >
                                        Home
                                    </a>
                                    <a 
                                        href="#about" 
                                        onClick={() => handleLinkClick('#about')}
                                        className={`${activeLink === '#about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
                                    >
                                        About
                                    </a>
                                    <a 
                                        href="#services" 
                                        onClick={() => handleLinkClick('#services')}
                                        className={`${activeLink === '#services' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
                                    >
                                        Services
                                    </a>
                                    <a 
                                        href="#contact" 
                                        onClick={() => handleLinkClick('#contact')}
                                        className={`${activeLink === '#contact' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition duration-300`}
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button 
                                onClick={toggleSidebar} 
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                            >
                                Menu
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Sidebar */}
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed inset-y-0 right-0 w-64 bg-gray-800 p-4 rounded-l-lg shadow-lg transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col space-y-4">
                        <a 
                            href="#home" 
                            onClick={() => handleLinkClick('#home')}
                            className={`${activeLink === '#home' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            onClick={() => handleLinkClick('#about')}
                            className={`${activeLink === '#about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                        >
                            About
                        </a>
                        <a 
                            href="#services" 
                            onClick={() => handleLinkClick('#services')}
                            className={`${activeLink === '#services' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                        >
                            Services
                        </a>
                        <a 
                            href="#contact" 
                            onClick={() => handleLinkClick('#contact')}
                            className={`${activeLink === '#contact' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-base font-medium transition duration-300`}
                        >
                            Contact
                        </a>
                        <button 
                            onClick={toggleSidebar} 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
