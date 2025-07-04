'use client'

import { useState } from 'react';
// import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
// import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'; // Hamburguesa y X

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header className="w-full">
            {/* Barra superior */}
            <div className="bg-gray-800 text-white text-sm">
                <div className="container mx-auto max-w-7xl flex justify-between px-4 py-3">
                    <span>JUEVES 03 DE JULIO, 10.4°c</span>
                    <div className="flex gap-3">
                        {/* iconos */}
                        {/* <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaYoutube /></a> */}
                    </div>
                </div>
            </div>

            {/* Barra principal */}
            {/* className="bg-gradient-to-r from-pink-600 to-red-600"  */}
            <div style={{
                background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
            }}>
                <div className="container mx-auto max-w-7xl flex justify-between items-center py-4 px-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/terraviva-bco.png" alt="Terraviva" className="h-20" />
                    </div>

                    {/* Menú y buscador: solo visible en md+ */}
                    <div className="hidden md:flex items-center gap-4">
                        <nav className="flex items-center gap-6 text-white font-semibold">
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="hover:cursor-pointer"
                                >
                                    Noticias ▾
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute top-full left-0 bg-white text-black mt-1 rounded shadow w-40 z-10">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Todas</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Buenos Aires</a>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="hover:underline">Agenda</a>
                            <a href="#" className="hover:underline">Galería</a>
                        </nav>

                        {/* Buscador */}
                        <div className="flex items-center border border-white rounded overflow-hidden">
                            <input
                                type="text"
                                placeholder="buscar"
                                className="px-2 py-1 text-black focus:outline-none"
                            />
                            <button className="bg-white text-black px-2">
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* Botón hamburguesa: visible solo en mobile */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setSidebarOpen(true)}
                    >
                        {/* <HiOutlineMenuAlt3 /> */}
            ///
                    </button>
                </div>
            </div>

            {/* Sidebar (menu mobile) */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white z-20 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 shadow-lg`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <img src="/terraviva-bco.png" alt="Terraviva" className="h-10" />
                    <button
                        className="text-black text-2xl"
                        onClick={() => setSidebarOpen(false)}
                    >
                        {/* <HiOutlineX /> / */}
            ///
                    </button>
                </div>
                <nav className="flex flex-col gap-2 p-4 text-black font-semibold">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-left"
                    >
                        Noticias ▾
                    </button>
                    {dropdownOpen && (
                        <div className="ml-4 flex flex-col gap-1">
                            <a href="#" className="hover:underline">Todas</a>
                            <a href="#" className="hover:underline">Buenos Aires</a>
                        </div>
                    )}
                    <a href="#" className="hover:underline">Agenda</a>
                    <a href="#" className="hover:underline">Galería</a>
                    <div className="mt-4 flex items-center border border-gray-400 rounded overflow-hidden">
                        <input
                            type="text"
                            placeholder="buscar"
                            className="px-2 py-1 text-black focus:outline-none w-full"
                        />
                        <button className="bg-gray-200 text-black px-2">
                            🔍
                        </button>
                    </div>
                </nav>
            </div>

            {/* Fondo semi-transparente detrás del sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-[rgb(0,0,0)]/50 z-10"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </header>
    );
}
