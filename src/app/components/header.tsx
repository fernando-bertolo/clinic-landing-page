'use client'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { useState } from "react";
import { ButtonSchedule } from './button.schedule';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenu() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <header className="w-full h-20 bg-[var(--tertiary-color)] shadow-md flex justify-center items-center p-2">
                <div className="flex items-center justify-between max-w-7xl w-full">
                    <div className="flex items-center">
                        <Image
                            src="/logo-sao-marcos.jpeg"
                            alt="Logo"
                            width={150}
                            height={50}
                        />
                        <ul className="hidden sm:flex gap-4 text-[var(--secondary-color)]">
                            <li>|</li>
                            <li className="hover:text-[var(--primary-color)] cursor-pointer">Home</li>
                            <li className="hover:text-[var(--primary-color)] cursor-pointer">Sobre</li>
                            <li className="hover:text-[var(--primary-color)] cursor-pointer">Serviços</li>
                            <li className="hover:text-[var(--primary-color)] cursor-pointer">Depoimentos</li>
                            <li className="hover:text-[var(--primary-color)] cursor-pointer">Contato</li>
                        </ul>
                    </div>

                    <button
                        type="button"
                        className={`
                        hidden sm:flex p-3 bg-[var(--primary-color)] gap-2 justify-center items-center text-white rounded-md font-medium text-sm cursor-pointer hover:bg-[var(--primary-color-hover)]
                    `}
                    >
                        <i className="fa-brands fa-whatsapp fa-lg"></i>
                        Agendar Consulta
                    </button>

                    <button
                        type="button"
                        className="sm:hidden block cursor-pointer mr-2"
                        onClick={handleMenu}
                    >
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </button>

                </div>
            </header>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={handleMenu}
                />
            )}
            {/* Header Mobile */}
            <div
                className={`
                        fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
                        p-4
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    `}
            >
                <div>
                    <FontAwesomeIcon icon={faX} className="ml-auto cursor-pointer" onClick={handleMenu} />
                </div>
                <div className="p-4">
                    <ul className="flex flex-col gap-4 text-[var(--secondary-color)]">
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Serviços</li>
                        <li>Depoimentos</li>
                        <li>Contato</li>
                        {/* Incluindo o botão no menu lateral */}
                        <li className="mt-4">
                            <button
                                type="button"
                                className="flex w-full p-3 bg-[var(--primary-color)] gap-2 justify-center items-center text-white rounded-md font-medium text-sm cursor-pointer hover:bg-[var(--primary-color-hover)]"
                            >
                                <i className="fa-brands fa-whatsapp fa-lg"></i>
                                Agendar Consulta
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};