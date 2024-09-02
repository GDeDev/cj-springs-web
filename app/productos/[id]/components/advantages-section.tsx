import Image from 'next/image';

const AdvantagesSection = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6">
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-primary-400">Ventajas</h3>
                        <p className="text-gray-900 dark:text-gray-300">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-primary-400">Ventajas</h3>
                        <p className="text-gray-900 dark:text-gray-300">Id eros pellentesque facilisi id mollis faucibus commodo enim.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-primary-400">Ventajas</h3>
                        <p className="text-gray-900 dark:text-gray-300">Tristique elementum, ac maecenas enim fringilla placerat scelerisque semper.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-primary-500 dark:text-primary-400">Ventajas</h3>
                        <p className="text-gray-900 dark:text-gray-300">Curabitur magna cras euismod pharetra, mauris malesuada sit enim, elementum.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-8 md:mt-0">
                    <div className="relative w-full h-64 bg-gray-800 dark:bg-gray-200 rounded-lg">
                        <Image src="/hero.png" alt="Illustration" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
