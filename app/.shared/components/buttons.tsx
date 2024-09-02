import React from 'react';
import Link from 'next/link';

const Button = ({ children, href, variant }) => {
    // Definir clases según el tipo de botón
    const baseClasses = "py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none";
    const primaryClasses = "bg-primary-500 text-white hover:bg-transparent border border-primary-500 ";
    const secondaryClasses = "border border-primary-500 text-primary-500 hover:bg-primary-400 hover:text-white";

    // Seleccionar las clases basadas en el tipo de botón
    const buttonClasses = variant === 'primary' ? `${baseClasses} ${primaryClasses}` : `${baseClasses} ${secondaryClasses}`;

    return (
        <Link href={href} passHref>
            <button className={buttonClasses}>
                {children}
            </button>
        </Link>
    );
};

export default Button;
