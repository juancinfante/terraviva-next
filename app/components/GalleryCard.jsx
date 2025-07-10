import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

export default function GalleryCard({ evento }) {

  function formatDate(fecha) {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const date = new Date(fecha);
    return `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} del ${date.getFullYear()}`;
  }

  return (
    <div className="flex flex-col">
    <Link href={`/galeria/album/${evento._id}`} className="h-full">
        <div className="overflow-hidden rounded">
          <OptimizedImage
            url={evento.portada}
            alt={evento.nombre}
            crop="fill"
            width={400}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <span className="text-xs text-gray-600 mt-2">{formatDate(evento.fecha)}</span>
        <h3 className="text-sm font-bold text-black line-clamp-1 hover:underline">{evento.nombre}</h3>
      </Link>
    </div>
  );
}
