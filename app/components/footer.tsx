import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Image src='https://res.cloudinary.com/dabrn7e05/image/upload/v1700014051/assets/Cj-500x500-min_wc648k.webp' alt="CJ Logo" width={50} height={50} />
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:underline">Opcion 1</a>
                        <a href="#" className="hover:underline">Opcion 2</a>
                        <a href="#" className="hover:underline">Opcion 3</a>
                        <a href="#" className="hover:underline">Opcion 4</a>
                        <a href="#" className="hover:underline">Opcion 5</a>
                        <a href="#" className="hover:underline">Opcion 6</a>
                    </nav>
                </div>
                <div className="border-t border-gray-700 my-4"></div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0">CJ SPRINGS @ 2024. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white"><Image src="/iconDefault.png" alt="YouTube" width={24} height={24} /></a>
                        <a href="#" className="hover:text-white"><Image src="/iconDefault.png" alt="Facebook" width={24} height={24} /></a>
                        <a href="#" className="hover:text-white"><Image src="/iconDefault.png" alt="Twitter" width={24} height={24} /></a>
                        <a href="#" className="hover:text-white"><Image src="/iconDefault.png" alt="Instagram" width={24} height={24} /></a>
                        <a href="#" className="hover:text-white"><Image src="/iconDefault.png" alt="LinkedIn" width={24} height={24} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;