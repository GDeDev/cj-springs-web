'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Carousel = () => {
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
        },
        {
            id: 3,
            company: 'TechCorp',
            description: 'Nulla facilisi etiam dignissim diam quis enim. Arcu cursus vitae congue mauris. Pharetra et ultrices neque ornare aenean euismod elementum nisi.',
            name: 'Max',
            role: 'Developer',
        },
        {
            id: 4,
            company: 'CreativeHub',
            description: 'Leo vel orci porta non pulvinar neque laoreet. Amet dictum sit amet justo donec enim. Eu sem integer vitae justo eget magna fermentum.',
            name: 'Bella',
            role: 'Designer',
        },
        {
            id: 5,
            company: 'InnoSolutions',
            description: 'Auctor elit sed vulputate mi sit amet. Ultrices gravida dictum fusce ut placerat orci. Sed adipiscing diam donec adipiscing tristique risus.',
            name: 'John',
            role: 'Manager',
        },
        {
            id: 6,
            company: 'BrightFuture',
            description: 'Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Proin libero nunc consequat interdum varius sit amet mattis vulputate.',
            name: 'Sophia',
            role: 'Intern',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= cards.length ? 0 : prevIndex + 1
        );
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative flex items-center justify-center w-full bg-gray-100 dark:bg-gray-900 py-12">
            <button
                onClick={prevCard}
                className="absolute left-0 ml-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                <span className="text-gray-700 dark:text-gray-300">&#8249;</span>
            </button>
            <div className="w-full md:w-3/4 flex overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mx-2 w-full h-80">
                                <div className="flex flex-col items-center h-full">
                                    <Image
                                        src="/placeholder-logo.png" // Reemplaza con la ruta de tu imagen
                                        alt={card.company}
                                        width={50}
                                        height={50}
                                        className="mb-4"
                                    />
                                    <h3 className="text-xl font-bold mb-2 text-center text-primary-500 dark:text-primary-400">{card.company}</h3>
                                    <p className="text-gray-900 dark:text-gray-300 mb-4 text-center line-clamp-3">{card.description}</p> {/* Truncate */}
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
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={nextCard}
                className="absolute right-0 mr-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
                <span className="text-gray-700 dark:text-gray-300">&#8250;</span>
            </button>
        </div>
    );
};

export default Carousel;
