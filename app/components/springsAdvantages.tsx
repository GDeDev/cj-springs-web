import React from 'react';

const AdvantagesSection = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-12 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-primary-500 dark:text-primary-400 text-xl font-bold mb-2">FABRICADOS BAJO LA NORMA X</h2>
                <h3 className="text-2xl font-bold mb-8">VENTAJAS DE NUESTROS RESORTES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src="iconDefault.png" alt="Icon 1" className='w-8 h-8 mb-6' />
                            <p className="text-gray-900 dark:text-gray-300">Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui.</p>
                        </div>
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src="iconDefault.png" alt="Icon 2" className='w-8 h-8 mb-6' />
                            <p className="text-gray-900 dark:text-gray-300">Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur.</p>
                        </div>
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src="iconDefault.png" alt="Icon 3" className='w-8 h-8 mb-6' />
                            <p className="text-gray-900 dark:text-gray-300">Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.</p>
                        </div>
                    </div>
                    <div className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src="iconDefault.png" alt="Icon 4" className='w-8 h-8 mb-6' />
                            <p className="text-gray-900 dark:text-gray-300">Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius.</p>
                        </div>
                    </div>
                </div>
                <button className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-400">
                    QUIERO SER REVENDEDOR
                </button>
            </div>
        </section>
    );
};

export default AdvantagesSection;
