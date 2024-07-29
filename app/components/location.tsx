import React from 'react';
import Image from 'next/image';

const Location = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-primary-500 dark:text-primary-400 text-xl font-bold mb-2">GREGORIO DE LAFERRERE</h2>
                        <h3 className="text-2xl font-bold mb-4">FÁBRICA PROPIA DE MÁS DE ASADASDASD</h3>
                        <div className="flex mb-4">
                            <div className="flex flex-col items-center px-4">
                                <img src="iconDefault.png" alt="Icon 1" className="w-10 h-10 mb-2" />
                                <p className="text-gray-900 dark:text-gray-300">Tristique elementum, ac maecenas enim fringilla placerat scelerisque semper.</p>
                            </div>
                            <div className="flex flex-col items-center px-4">
                                <img src="iconDefault.png" alt="Icon 2" className="w-10 h-10 mb-2" />
                                <p className="text-gray-900 dark:text-gray-300">Curabitur magna cras euismod pharetra, mauris malesuada sit enim, elementum.</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-400">
                                Cómo llegar
                            </button>
                            <button className="border border-primary-500 text-primary-500 py-2 px-4 rounded-full hover:bg-primary-400 hover:text-white">
                                Contacto
                            </button>
                        </div>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-800 rounded-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.385307203401!2d-58.607634424451646!3d-34.745885572903674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7ee9027d38d%3A0x41f90a9b761741de!2sCJ%20Springs!5e0!3m2!1ses!2sar!4v1722222178926!5m2!1ses!2sar" width='100%' height='100%'></iframe>                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
