import React from 'react';

const ResellersSection = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-12 text-center">
            <div className="container mx-auto px-6">
                <h2 className="text-primary-500 dark:text-primary-400 text-xl font-bold mb-2">MÁS DE 100 REVENDEDORES</h2>
                <h3 className="text-2xl font-bold mb-6">Nuestros revendedores</h3>
                <p className="text-gray-900 dark:text-gray-300 mb-8">
                    Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
                </p>
                <div className="flex flex-wrap justify-center space-x-4">
                    <div className="flex flex-col items-center px-4 mb-4">
                        <img src="logo.png" alt="Shells" />
                    </div>
                    <div className="flex flex-col items-center px-4 mb-4">
                        <img src="logo.png" alt="SmartFinder" />
                    </div>
                    <div className="flex flex-col items-center px-4 mb-4">
                        <img src="logo.png" alt="Zoomerr" />
                    </div>
                    <div className="flex flex-col items-center px-4 mb-4">
                        <img src="logo.png" alt="ArtVenue" />
                    </div>
                    <div className="flex flex-col items-center px-4 mb-4">
                        <img src="logo.png" alt="Kontrastr" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResellersSection;
