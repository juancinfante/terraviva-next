import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

export default function CardAgenda({ evento }) {

  function obtenerFechaFormateadaCompleta(fechaStr) {
    const fecha = new Date(fechaStr + 'T00:00:00'); // Fuerza local

    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const nombreDia = dias[fecha.getDay()];
    const numeroDia = fecha.getDate();
    const nombreMes = meses[fecha.getMonth()];

    return `${nombreDia} ${numeroDia} de ${nombreMes}`;
  }

  return (
    <Link href={`/agenda/evento/${evento._id}`} className="h-full">
      <div className="flex flex-col  rounded-2xl bg-white overflow-hidden  hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative overflow-hidden group">
          {/* <img src={evento.img_portada} alt={evento.titulo} className="w-full h-55 object-cover" /> */}
          <OptimizedImage
            url={evento.flayer}
            alt={evento.titulo}
            crop="fill"
            width={400}
            height={500}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className="absolute bottom-2 left-2 text-xs font-semibold px-2 py-1"
            style={{
              background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
            }}
          >
            {evento.provincia}
          </span>
        </div>
        <div className="flex flex-col p-3 pb-5 text-[#3a3247] gap-1">
          <h3 className="text-md p-0 font-semibold line-clamp-2 hover:underline cursor-pointer">
            {evento.titulo}
          </h3>
          <h3 className="text-sm">{obtenerFechaFormateadaCompleta(evento.fecha)}, {evento.horario}hs </h3>
          <h3 className="text-xs line-clamp-1 font-semibold">{evento.direccion}</h3>
        </div>
      </div>
    </Link>
  );
}
