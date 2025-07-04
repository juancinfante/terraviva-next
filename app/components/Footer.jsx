import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-[#0d1b3d] text-white">
            {/* Parte superior */}
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center py-6 px- gap-4">
                {/* Logo */}
                <img src="/terraviva-bco.png" alt="Terraviva" className="h-14" />

                {/* Texto */}
                <p className="text-center text-sm">Santiago del Estero, Argentina.</p>

                {/* Redes */}
                <div className="flex gap-2">
                    <a href="#" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <FaInstagram />
                    </a>
                    <a href="#" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <FaXTwitter />
                    </a>
                    <a href="#" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <FaYoutube />
                    </a>
                </div>
            </div>

            {/* Barra inferior */}
            <div className=" bg-black ">
                <div className="container mx-auto max-w-7xl text-xs flex flex-col md:flex-row justify-between items-center px- py-2">
                    <p>Copyright © 2024 Terraviva</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:underline">Noticias</a>
                        <a href="#" className="hover:underline">Agenda</a>
                        <a href="#" className="hover:underline">Galería</a>
                        <a href="#" className="hover:underline">Colaboradores</a>
                        <a href="#" className="hover:underline">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
