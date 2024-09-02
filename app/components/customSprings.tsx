import React from 'react';

const CustomsSprings = () => {
    const blogs = [
        {
            title: 'RALLY',
            description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
            imageUrl: '/picture.png'
        },
        {
            title: 'COMPETICIÓN',
            description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
            imageUrl: '/picture.png'
        },
        {
            title: 'XTREME',
            description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
            imageUrl: '/picture.png'
        },
        {
            title: 'MAQUINARIA',
            description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
            imageUrl: '/picture.png'
        }
    ];

    return (
        <>
            <div className="w-full flex justify-center py-4 bg-gray-700">
                <hr className="w-11/12 h-[2px] bg-primary-500 border-none" />
            </div>
            <section className="bg-gray-100 dark:bg-gray-700 py-12 text-center">

                <div className="container mx-auto px-6">
                    <h2 className="text-primary-500 dark:text-primary-400 text-xl font-bold mb-2">FROM OUR BLOG</h2>
                    <h3 className="text-2xl font-bold mb-8">ESPIRALES EN SERIE</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {blogs.map((blog, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                                <div className="bg-gray-300 dark:bg-gray-700 h-40 flex items-center justify-center">
                                    <img src={blog.imageUrl} alt={blog.title} className="h-full w-full" />
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-bold mb-2">{`Línea ${blog.title}`}</h4>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
                                    <button className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-400">
                                        Ver más
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CustomsSprings;
