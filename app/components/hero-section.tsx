import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly">
                <div className="md:w-1/2 text-center md:text-left px-6">
                    <h1 className="text-4xl font-bold mb-4 text-primary-500 dark:text-primary-400">CJ SPRINGS, RESORTES DE CALIDAD</h1>
                    <p className="text-lg mb-6 text-gray-900 dark:text-gray-300">
                        Somos una empresa de más de to create beautiful websites and apps with a powerful and easy-to-use tool.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="bg-primary-500 text-white py-2 px-4 rounded-full hover:bg-primary-400">
                            Quiero ser distribuidor
                        </button>
                        <button className="border border-primary-500 text-primary-500 py-2 px-4 rounded-full hover:bg-primary-400 hover:text-white">
                            Nosotros
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-8 md:mt-0 px-6">
                    <div className="relative w-full h-64 bg-gray-800 dark:bg-gray-200 rounded-lg">
                        <Image src="/hero.png" alt="Illustration" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;