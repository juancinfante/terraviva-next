// "use client";
// import { useState, useEffect } from "react";
// import GalleryCard from "./GalleryCard"; // Asegúrate de que la ruta sea correcta

// export default function ListaGaleria() {

//     const [eventos, setEventos] = useState([]);
//     const [page, setPage] = useState(1);
//     const [hasNext, setHasNext] = useState(true);
//     const limit = 30;

//     function formatDate(fecha) {
//         const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
//         const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//         const date = new Date(fecha);

//         const dayOfWeek = days[date.getDay()];
//         const dayOfMonth = date.getDate();
//         const month = months[date.getMonth()];
//         const year = date.getFullYear();

//         return `${dayOfWeek} ${dayOfMonth} de ${month} del ${year}`;
//     }
//     // Fetch inicial y cuando page cambia
//     useEffect(() => {
//         const fetchEventos = async () => {
//             try {
//                 const res = await fetch(`https://terraviva-api-new.vercel.app/api/albums/${limit}/${page}`);
//                 const data = await res.json();
//                 setEventos(prev => [...prev, ...data.albums.docs]);
//                 setHasNext(data.hasNextPage);
//             } catch (error) {
//                 console.error("Error al cargar eventos:", error);
//             }
//         };

//         fetchEventos();
//     }, [page]);

//     // Escuchar scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             if (
//                 window.innerHeight + document.documentElement.scrollTop + 100 >=
//                 document.documentElement.offsetHeight
//             ) {
//                 if (hasNext) {
//                     setPage(prev => prev + 1);
//                 }
//             }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [hasNext]);

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {eventos.map(gal => (
//                 <GalleryCard
//                     key={gal._id}
//                     date={formatDate(gal.fecha)}           // adaptá si la propiedad de fecha tiene otro nombre
//                     title={gal.nombre}        // adaptá si el campo se llama distinto
//                     image={gal.portada}   // adaptá según la propiedad que tengas
//                 />
//             ))}
//         </div>
//     );
// }


"use client";
import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

export default function ListaGaleria({ initialData, initialHasNext, initialPage, limit }) {
  const [eventos, setEventos] = useState(initialData || []);
  const [page, setPage] = useState(initialPage);
  const [hasNext, setHasNext] = useState(initialHasNext);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch cuando page cambia (excepto la primera vez)
  useEffect(() => {
    if (page === initialPage) return; // evitar duplicar el SSR inicial
    const fetchMore = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://terraviva-api-new.vercel.app/api/albums/${limit}/${page}`);
        const data = await res.json();
        setEventos(prev => [...prev, ...data.albums.docs]);
        setHasNext(data.albums.hasNextPage);
      } catch (error) {
        console.error("Error al cargar más eventos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMore();
  }, [page]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight) {
        if (hasNext && !isLoading) {
          setPage(prev => prev + 1);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNext, isLoading]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventos.map((gal, index) => (
          <GalleryCard
              key={gal._id || index}
              evento={gal}  // adaptá según la propiedad que tengas
            />
        ))}
      </div>
      
      <div className="flex justify-center m-10">
        {isLoading && <span className="text-gray-500">Cargando más...</span>}
        {!hasNext && !isLoading && <span className="text-gray-500">No hay más galerías.</span>}
      </div>
    </>
  );
}
