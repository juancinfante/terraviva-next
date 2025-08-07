'use client'

import Link from 'next/link';
import { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import { useRouter } from 'next/navigation';
// import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
// import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'; // Hamburguesa y X

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/noticias?b=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <header className="w-full">
            {/* Barra superior */}
            <div className="bg-gray-800 text-white text-sm">
                <div className="container mx-auto max-w-7xl flex justify-between px-4 py-3">
                    <span>JUEVES 03 DE JULIO, 10.4°c</span>
                    <div className="flex gap-3">
                        {/* iconos */}
                        <a href="https://www.facebook.com/terravivafolclore" target="_blank" rel="noopener noreferrer">
                            <img src='/facebook-svgrepo-com.svg' className="w-4" />
                        </a>
                        <a href="https://www.instagram.com/terravivafolclore" target="_blank" rel="noopener noreferrer">
                            <img src='/insta-svgrepo-com.svg' className="w-4" />
                        </a>
                        <a href="https://x.com/terravivanoa" target="_blank" rel="noopener noreferrer">
                            <img src='/x-svgrepo-com.svg' className="w-4" />
                        </a>
                        <a href="https://www.youtube.com/user/terravivafolclore" target="_blank" rel="noopener noreferrer">
                            <img src='/youtube-svgrepo-com.svg' className="w-4" />
                        </a>
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
                    <Link href="/">
                        <div className="flex items-center">
                            <OptimizedImage
                                url="https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751903091/terraviva/terraviva-bco_dvxzbk.png"
                                alt="Terraviva.com.ar"
                                crop="fill"
                                width={180}
                                className="w-full object-cover"
                            />
                        </div>
                    </Link>

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
                                    <div className="absolute top-full left-0 bg-white text-black mt-1 rounded shadow w-40 z-10 max-h-64 overflow-y-auto">
                                        <Link href="/noticias" className="block px-4 py-2 hover:bg-gray-100">Todas</Link>
                                        <Link href="/noticias/buenos-aires/1" className="block px-4 py-2 hover:bg-gray-100">Buenos Aires</Link>
                                        <Link href="/noticias/capital-federal/1" className="block px-4 py-2 hover:bg-gray-100">Capital Federal</Link>
                                        <Link href="/noticias/catamarca/1" className="block px-4 py-2 hover:bg-gray-100">Catamarca</Link>
                                        <Link href="/noticias/jujuy/1" className="block px-4 py-2 hover:bg-gray-100">Jujuy</Link>
                                        <Link href="/noticias/cordoba/1" className="block px-4 py-2 hover:bg-gray-100">Córdoba</Link>
                                        <Link href="/noticias/la-rioja/1" className="block px-4 py-2 hover:bg-gray-100">La Rioja</Link>
                                        <Link href="/noticias/salta/1" className="block px-4 py-2 hover:bg-gray-100">Salta</Link>
                                        <Link href="/noticias/santiago-del-estero/1" className="block px-4 py-2 hover:bg-gray-100">Santiago del Estero</Link>
                                        <Link href="/noticias/tucuman/1" className="block px-4 py-2 hover:bg-gray-100">Tucumán</Link>
                                        <Link href="/noticias/chaco/1" className="block px-4 py-2 hover:bg-gray-100">Chaco</Link>
                                        <Link href="/noticias/chubut/1" className="block px-4 py-2 hover:bg-gray-100">Chubut</Link>
                                        <Link href="/noticias/corrientes/1" className="block px-4 py-2 hover:bg-gray-100">Corrientes</Link>
                                        <Link href="/noticias/entre-rios/1" className="block px-4 py-2 hover:bg-gray-100">Entre Ríos</Link>
                                        <Link href="/noticias/formosa/1" className="block px-4 py-2 hover:bg-gray-100">Formosa</Link>
                                        <Link href="/noticias/la-pampa/1" className="block px-4 py-2 hover:bg-gray-100">La Pampa</Link>
                                        <Link href="/noticias/mendoza/1" className="block px-4 py-2 hover:bg-gray-100">Mendoza</Link>
                                        <Link href="/noticias/misiones/1" className="block px-4 py-2 hover:bg-gray-100">Misiones</Link>
                                        <Link href="/noticias/neuquen/1" className="block px-4 py-2 hover:bg-gray-100">Neuquén</Link>
                                        <Link href="/noticias/rio-negro/1" className="block px-4 py-2 hover:bg-gray-100">Río Negro</Link>
                                        <Link href="/noticias/san-juan/1" className="block px-4 py-2 hover:bg-gray-100">San Juan</Link>
                                        <Link href="/noticias/san-luis/1" className="block px-4 py-2 hover:bg-gray-100">San Luis</Link>
                                        <Link href="/noticias/santa-cruz/1" className="block px-4 py-2 hover:bg-gray-100">Santa Cruz</Link>
                                        <Link href="/noticias/tierra-del-fuego/1" className="block px-4 py-2 hover:bg-gray-100">Tierra del Fuego</Link>
                                    </div>

                                )}
                            </div>
                            <Link href="/agenda/" className="hover:underline">Agenda</Link>
                            <Link href="/galeria/" className="hover:underline">Galería</Link>
                        </nav>

                        {/* Buscador */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex items-center bg-white rounded-4xl shadow-sm overflow-hidden p-2"
                        >
                            <input
                                type="text"
                                placeholder="Buscar..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="text-gray-800 placeholder-gray-400 focus:outline-none flex-1 text-xs ps-1"
                            />
                            <button
                                type="submit"
                                className="hover:bg-gray-100 transition"
                            >
                                <img src='/search-svgrepo-com.svg' className="w-4 cursor-pointer" />
                            </button>
                        </form>
                    </div>

                    {/* Botón hamburguesa: visible solo en mobile */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setSidebarOpen(true)}
                    >
                        {/* <HiOutlineMenuAlt3 /> */}
                        <img src='/menu-hamburger-svgrepo-com.svg' className="w-10" />
                    </button>
                </div>
            </div>

            {/* Sidebar (menu mobile) */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white z-20 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 shadow-lg`}>
                <div className="flex justify-between items-center p-4 border-b" style={{
                    background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
                }}>
                    <img src="/terraviva-bco.png" alt="Terraviva" className="h-10" />
                    <button
                        className="text-black text-2xl"
                        onClick={() => setSidebarOpen(false)}
                    >
                        {/* <HiOutlineX /> / */}
                        <img src='/times-xs-svgrepo-com.svg' className="w-4" />
                    </button>
                </div>
                <nav className="flex flex-col gap-2 p-4 text-black font-semibold">
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center bg-white rounded-4xl shadow-sm overflow-hidden p-2 border border-gray-300"
                    >
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="text-gray-800 placeholder-gray-400 focus:outline-none flex-1 text-xs ps-1"
                        />
                        <button
                            type="submit"
                            className="hover:bg-gray-100 transition"
                        >
                            <img src='/search-svgrepo-com.svg' className="w-4 cursor-pointer" />
                        </button>
                    </form>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-left ps-3"
                    >
                        Noticias ▾
                    </button>
                    {dropdownOpen && (
                        <div className="ml-4 flex flex-col gap-1">
                            <a href="#" className="hover:underline">Todas</a>
                            <a href="#" className="hover:underline">Buenos Aires</a>
                        </div>
                    )}
                    <a href="#" className="hover:underline ps-3">Agenda</a>
                    <a href="#" className="hover:underline ps-3">Galería</a>
                    {/* Buscador Mobile*/}

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
