"use client"
import Link from 'next/link';
import { useState } from 'react'

const HeaderAgenda = ({ provincia }) => {

    const [open, setOpen] = useState(false);

    const nombreProvincia = provincia
        .split('-')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)) // Capitalizar cada palabra
        .join(' ');

    const provincias = [
        "Todas", "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes",
        "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza",
        "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis",
        "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"
    ];

    return (
        <>
            <div className="relative col-span-4 mt-4 md:mt-0 z-0 mb-1 rounded-2xl overflow-hidden w-full h-[300px] md:h-[400px]">
                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://elprogresoweb.com.ar/wp-content/uploads/2024/01/penia-nuna.jpg')" }}
                ></div>

                {/* Degradado */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                {/* Contenido */}
                <div className="relative z-10 p-6 md:p-10 text-white max-w-xl">
                    <h2 className="text-xl md:text-2xl font-semibold">Explora y descubrí</h2>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">La agenda mas completa del País</h1>
                    <p className="text-sm md:text-base mb-4">
                        Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore. Mantente conectado con los eventos que más te apasionan y viví la música, la danza y nuestras tradiciones como nunca antes.
                    </p>

                </div>
            </div>
            <div className="relative inline-block text-left mt-2 mb-3">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full"
                >
                    <span>{nombreProvincia}</span>
                    <svg
                        className={`w-4 h-4 transform transition-transform ${open ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {open && (
                    <div className="absolute mt-2 w-56 bg-white rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                        <ul className="py-1">
                            {provincias.map((provincia) => (
                                <li key={provincia}>
                                    <Link
                                        href={
                                            provincia === "Todas"
                                                ? "/agenda"
                                                : `/agenda/${encodeURIComponent(provincia.toLowerCase().replace(/\s+/g, '-'))}`
    }                                   
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        {provincia}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default HeaderAgenda