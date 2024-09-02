'use client'
import React from 'react';
import Image from 'next/image';

const FormPage = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Imagen de fondo */}
            <div className="h-screen absolute inset-0 overflow-hidden">
                <div className="absolute  h-1/2 inset-0 bg-primary-500 "></div> {/* Overlay oscuro */}
                <div className="  h-1/2 inset-0 bg-black opacity-50"></div> {/* Overlay oscuro */}
            </div>

            {/* Contenedor del formulario */}
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Formulario x</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">Rhoncus morbi et augue nec, in id ullamcorper at sit.</p>
                <form>
                    {/* Campos del formulario */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                            <input
                                required
                                type="text"
                                placeholder="Lionel"
                                className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Apellido</label>
                            <input
                                required
                                type="text"
                                placeholder="Messi"
                                className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Documento</label>
                        <input
                            required
                            type="text"
                            placeholder="45012511"
                            className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Empresa</label>
                        <input
                            required
                            type="text"
                            placeholder="Adidas"
                            className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Provincia</label>
                        <select className="w-full px-4 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500">
                            <option>Buenos Aires</option>
                            {/* Más opciones si es necesario */}
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="emailOptIn" className="mr-2 text-primary-500 focus:ring-primary-500" required />
                        <label htmlFor="emailOptIn" className="text-sm text-gray-700 dark:text-gray-300">Acepto dejar mi email para futuras campañas de email</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormPage;
