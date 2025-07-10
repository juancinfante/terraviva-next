import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

export default function Footer() {
    return (
        <footer className="bg-[#0d1b3d] text-white">
            {/* Parte superior */}
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center py-6 px- gap-4">
                {/* Logo */}
                <OptimizedImage
                    url="https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751903091/terraviva/terraviva-bco_dvxzbk.png"
                    alt="Terraviva.com.ar"
                    crop=""
                    // height={}
                    width={180}
                    className="object-cover"
                />
                {/* Texto */}
                <p className="text-center text-sm">Santiago del Estero, Argentina.</p>

                {/* Redes */}
                <div className="flex gap-2">
                    <a href="https://www.facebook.com/terravivafolclore" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <img src='/facebook-svgrepo-com.svg' className="w-5" />
                    </a>
                    <a href="https://x.com/terravivanoa" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <img src='/x-svgrepo-com.svg' className="w-5" />
                    </a>
                    <a href="https://www.instagram.com/terravivafolclore" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <img src='/insta-svgrepo-com.svg' className="w-5" />
                    </a>
                    <a href="https://www.youtube.com/user/terravivafolclore" target="_blank" rel="noopener noreferrer" className="bg-red-600 p-2 rounded hover:bg-red-700">
                        <img src='/youtube-svgrepo-com.svg' className="w-5" />
                    </a>
                </div>
            </div>

            {/* Barra inferior */}
            <div className=" bg-black ">
                <div className="container mx-auto max-w-7xl text-xs flex flex-col md:flex-row justify-between items-center px- py-2">
                    <p>Copyright © 2024 Terraviva</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <Link href="/noticias/" className="hover:underline">Noticias</Link>
                        <Link href="/agenda/" className="hover:underline">Agenda</Link>
                        <Link href="/galeria/" className="hover:underline">Galería</Link>
                        {/* <Link href="/colaboradores/" className="hover:underline">Colaboradores</Link> */}
                        {/* <Link href="" className="hover:underline">Contacto</Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
