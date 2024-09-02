'use client'
import React, { useState } from 'react';

interface Faq {
    question: string;
    answer: string;
}

interface FaqsProps {
    faqs: Faq[];
}

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="flex flex-col items-center w-full bg-gray-100 dark:bg-gray-900 py-12">
            <div className="w-full flex flex-col items-center justify-center container mx-auto px-6">
                <h2 className="text-primary-500 dark:text-primary-400 text-xl font-bold mb-2">PREGUNTAS FRECUENTES</h2>
                <h3 className="text-2xl font-bold mb-8">TU CONSULTA NO MOLESTA</h3>
                <div className="w-11/12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg">
                            <div
                                className="p-4 flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4 className="text-gray-900 dark:text-gray-300">{faq.question}</h4>
                                <span className="text-gray-900 dark:text-gray-300">{openFAQ === index ? '-' : '+'}</span>
                            </div>
                            <div
                                className={`transition-all duration-300 ease-out overflow-hidden`}
                                style={{ maxHeight: openFAQ === index ? '1000px' : '0px' }}
                            >
                                <div className="p-4 border-t border-gray-300 dark:border-gray-700">
                                    <p className="text-gray-900 dark:text-gray-300">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
