'use client'
import React from 'react';
import Image from 'next/image';

const CardSection = () => {
    const cards = [
        {
            id: 1,
            company: 'Zoomerr',
            description: 'Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum.',
            name: 'Xtreme',
            role: 'Role',
        },
        {
            id: 2,
            company: 'ArtVenue',
            description: 'Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.',
            name: 'GNC',
            role: 'Role',
        }
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                        >
                            <div className="flex flex-col items-center h-full">
                                <Image
                                    src="/placeholder-logo.png" // Reemplaza con la ruta de tu imagen
                                    alt={card.company}
                                    width={50}
                                    height={50}
                                    className="mb-4"
                                />
                                <h3 className="text-xl font-bold mb-2 text-center text-primary-500 dark:text-primary-400">{card.company}</h3>
                                <p className="text-gray-900 dark:text-gray-300 mb-4 text-center line-clamp-3">{card.description}</p>
                                <div className="flex items-center space-x-2 mt-auto">
                                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-2">
                                        <Image
                                            src="/placeholder-user.png" // Reemplaza con la ruta de tu imagen
                                            alt="User Icon"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-gray-300">{card.name}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{card.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardSection;
