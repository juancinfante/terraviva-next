import AsidePub from '../../../../components/AsidePub'
import OptimizedImage from '../../../../components/OptimizedImage'
import Title from '../../../../components/Title'
import BotonCompartirFacebook from '../../../../components/BotonCompartirFacebook';
import BotonCompartirWhatsApp from '../../../../components/BotonCompartirWhatsapp';
import BotonCompartirX from '../../../../components/BotonCompartirX';
import { buildCloudinaryUrl } from '../../../../utils/utils';

export async function generateMetadata({ params }) {
  try {
    const p = await params;

    const res = await fetch(`https://terraviva-api-new.vercel.app/api/eventos/${p.slugTitulo}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error("Error al cargar evento");
    }

    const data = await res.json();
    const evento = data.evento[0];

    if (!evento) {
      return {
        title: 'evento no encontrada',
        description: 'No pudimos encontrar la evento solicitada.',
      };
    }

    const stripHtml = (html) => (html || "").replace(/<[^>]*>?/gm, '').trim();

    const descripcionLimpia = evento.texto
      ? stripHtml(evento.texto).slice(0, 160)
      : "Descripción no disponible.";

    return {
      title: evento.titulo,
      description: descripcionLimpia,
      openGraph: {
        title: evento.titulo,
        description: descripcionLimpia,
        images: [
          {
            url: buildCloudinaryUrl(evento.flayer, {
                          width: 1100,
                          height: 567}),
            width: 1200,
            height: 630,
            alt: `Imagen de ${evento.titulo}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: evento.titulo,
        description: descripcionLimpia,
        images: [evento.flayer],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: 'Error al cargar noticia',
      description: 'Hubo un problema al obtener los datos de la noticia.',
    };
  }
}


export default async function page({ params }) {

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

  // Función para quitar HTML si quisieras usar 'texto'
  const stripHtml = (html) => (html || "").replace(/<[^>]*>?/gm, '').trim();

  const p = await params
  try {
    const res = await fetch(`https://terraviva-api-new.vercel.app/api/eventos/${p.slug}`, {
      // cache: 'no-store' // opcional si querés evitar cache
    });

    if (!res.ok) {
      throw new Error("Error al cargar evento");
    }

    const data = await res.json();
    const evento = data.evento;

    return (
      <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">

        <Title title="Evento" />

        <div className="mt-4 md:mt-0 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Flyer */}
          <div
            className="relative col-span-3 flex justify-center items-center overflow-hidden rounded-xl"
          >
            {/* Fondo blureado */}
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-md brightness-50"
              style={{
                backgroundImage: `url(${evento.flayer})`,
              }}
            ></div>

            {/* Imagen principal encima */}
            <div className="relative z-10">
              <OptimizedImage
                url={evento.flayer}
                alt={evento.titulo}
                crop="fill"
                className="w-[400px] object-contain rounded-xl"
              />
            </div>
          </div>


          {/* Detalle */}
          <div className="md:col-span-3 flex flex-col justify-between text-[#333333]">
            <h1 className="text-4xl font-bold w-full col-span-4 text-[#333333] mb-10">{evento.titulo}</h1>
            <h1 className='text-xl font-extrabold'>Sobre este evento:</h1>
            <p className='mb-7'>{stripHtml(evento.texto)}</p>
            <h1 className='text-xl font-extrabold'>Fecha y horario:</h1>
            <span className='flex mb-7 gap-2'>
              <img src="/location-svgrepo-com.svg" className='w-5' alt="" />
              <p className='font-semibold'>{obtenerFechaFormateadaCompleta(evento.fecha)}, {evento.horario}hs</p>
            </span>
            <h1 className='text-xl font-extrabold'>Lugar:</h1>
            <span className='flex gap-2 mb-10'>
              <img src="/date-svgrepo-com.svg" className='w-5' alt="" />
              <p className='font-semibold'>{evento.direccion}</p>
            </span>
            <iframe
              className='mb-10'
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_EMBED_API_KEY}&q=${encodeURI(evento.direccion)}`}
              style={{ height: "400px", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            {/* Botones compartir */}
            <div className="flex w-full items-center  justify-end space-x-2 mb-6 col-span-3">
              <h1 className='text-[#333c] text-[14px]'>Compartir evento:</h1>
              <BotonCompartirFacebook url={`https://terraviva.com.ar/noticia/${evento.slugTitulo}`} />
              <BotonCompartirWhatsApp url={`https://terraviva.com.ar/noticia/${evento.slugTitulo}`} />
              <BotonCompartirX url={`https://terraviva.com.ar/noticia/${evento.slugTitulo}`} />
            </div>
          </div>
        </div>
        <AsidePub />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <p className="text-center text-red-600 mt-10">Error al cargar el evento</p>
    );
  }
}