import React from 'react';

const Stats = () => {
    const numbers = [
        {
            icon: '/iconDefault.png',
            value: '250+',
            label: 'REVENDEDORES'
        },
        {
            icon: '/iconDefault.png',
            value: '6K+',
            label: 'ESPIRALES ANUALES'
        },
        {
            icon: '/iconDefault.png',
            value: '21.8K+',
            label: 'Available Resources'
        },
        {
            icon: '/iconDefault.png',
            value: '11K+',
            label: 'Subscribers'
        }
    ];

    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-primary-500 dark:text-primary-400 text-xl font-bold mb-2">CJ EN NÚMEROS</h2>
                <p className="text-gray-900 dark:text-gray-300 mb-8">
                    Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {numbers.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                            <div className="flex flex-col items-center">
                                <img src={item.icon} alt={item.label} className="w-12 h-12 mb-4" />
                                <p className="text-xl font-bold text-gray-900 dark:text-gray-300">{item.value}</p>
                                <p className="text-gray-900 dark:text-gray-300">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
