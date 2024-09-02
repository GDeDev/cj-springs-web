import React from 'react';

const Advantages = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
            <div className="container mx-auto">
                <h2 className="text-primary-500 dark:text-primary-400 text-xl font-bold mb-2">25 AÑOS DE EXPERIENCIA</h2>
                <h3 className="text-2xl font-bold mb-8">¿Por qué distribuir Cj?</h3>
                <div className="flex flex-col md:flex-row justify-around items-center mb-8 p-4  ">
                    <div className="flex flex-col items-center mb-4 md:mb-0 px-4">
                        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4">
                            <img src="/iconDefault.png" alt="Icon 1" className='w-4 h-4' />
                        </div>
                        <p className="text-gray-900 dark:text-gray-300">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4 md:mb-0 px-4">
                        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4">
                            <img src="/iconDefault.png" alt="Icon 2" className='w-4 h-4' />
                        </div>
                        <p className="text-gray-900 dark:text-gray-300">Id eros pellentesque facilisi id mollis faucibus commodo enim.</p>
                    </div>
                    <div className="flex flex-col items-center mb-4 md:mb-0 px-4">
                        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4">
                            <img src="/iconDefault.png" alt="Icon 3" className='w-4 h-4' />
                        </div>
                        <p className="text-gray-900 dark:text-gray-300">Nunc, pellentesque velit malesuada non massa arcu.</p>
                    </div>
                    <div className="flex flex-col items-center px-4">
                        <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full mb-4">
                            <img src="/iconDefault.png" alt="Icon 4" className='w-4 h-4' />
                        </div>
                        <p className="text-gray-900 dark:text-gray-300">Imperdiet purus pellentesque sit mi nibh sit integer faucibus.</p>
                    </div>
                </div>
                <button className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-400">
                    Contáctanos
                </button>
            </div>
        </section>
    );
};

export default Advantages;
