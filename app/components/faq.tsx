'use client'
import React, { useState, useRef, useEffect } from 'react';

const Faqs = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqs = [
        {
            question: '¿Cómo ser revendedor de CJ SPRINGS?',
            answer: 'Para ser revendedor de CJ SPRINGS, debes contactar con nuestro equipo de ventas y completar el formulario de solicitud.'
        },
        {
            question: '¿Cómo son los envíos?',
            answer: 'Realizamos envíos a todo el país mediante nuestras empresas de logística asociadas. Los tiempos de entrega varían según la ubicación.'
        },
        {
            question: '¿Qué medios de pago ofrecen?',
            answer: 'Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo mediante nuestra red de puntos de pago.'
        },
        {
            question: 'Pregunta 4',
            answer: 'Respuesta a la pregunta 4.'
        },
        {
            question: 'Pregunta 5',
            answer: 'Respuesta a la pregunta 5.'
        }
    ];

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