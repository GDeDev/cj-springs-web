import Image from 'next/image';

const ProductSection = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-64 bg-gray-800 dark:bg-gray-200 rounded-lg flex items-center justify-center">
                        <div className="w-32 h-32 bg-gray-300">
                            <Image src="/hero.png" alt="Illustration" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
                    <h2 className="text-3xl font-bold mb-4 text-primary-500 dark:text-primary-400">ESPIRAL PROGRESIVO</h2>
                    <div className='flex flex-row space-x-4'>
                        <div className="flex flex-col items-start mb-4">
                            <a href="#" className="hover:text-white">
                                <Image src="/iconDefault.png" alt="Icon" width={24} height={24} />
                            </a>
                            <p className="text-gray-900 dark:text-gray-300">Tristique elementum, ac maecenas enim fringilla placerat scelerisque semper.</p>
                        </div>
                        <div className="flex flex-col items-start mb-6">
                            <a href="#" className="hover:text-white">
                                <Image src="/iconDefault.png" alt="Icon" width={24} height={24} />
                            </a>
                            <p className="text-gray-900 dark:text-gray-300">Curabitur magna cras euismod pharetra, mauris malesuada sit enim, elementum.</p>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-400">
                            Ventajas
                        </button>
                        <button className="border border-primary-500 text-primary-500 py-2 px-4 rounded-full hover:bg-primary-400 hover:text-white">
                            Preguntas frecuentes
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
