'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cierra el menú cuando se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo y Botón de menú para Mobile */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center">
                        <Image
                            src="/logo.png" // Reemplaza con la ruta de tu logo
                            alt="CJ SPRINGS LOGO"
                            width={40}
                            height={40}
                            className="mr-2"
                        />
                        <span className="font-bold text-gray-700">CJ SPRINGS LOGO</span>
                    </div>

                    {/* Botón de menú para Mobile */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="text-gray-600 focus:outline-none"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            {/* Botón de hamburguesa */}
                            <div className="flex flex-col w-6 space-y-1">
                                <motion.div
                                    className="w-full h-1 bg-blue-900 rounded-full"
                                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="w-full h-1 bg-blue-900 rounded-full"
                                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="w-full h-1 bg-blue-900 rounded-full"
                                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Menu para Desktop */}
                <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:space-x-8 space-y-4 md:space-y-0 items-center`}>
                    {['Revendedores', 'Espirales', 'Preguntas frecuentes', 'Ubicación'].map((item) => (
                        <Link
                            href="#"
                            className="relative text-gray-600 hover:text-gray-800"
                            key={item}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        ref={menuRef}
                        className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 w-full"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                            <span className="mr-2">🏠</span> Revendedores
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                            <span className="mr-2">📂</span> Espirales
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                            <span className="mr-2">❓</span> Preguntas frecuentes
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                            <span className="mr-2">📍</span> Ubicación
                        </a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
