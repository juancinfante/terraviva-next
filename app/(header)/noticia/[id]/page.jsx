import Title from '@/app/components/Title'
import AsidePub from '@/app/components/AsidePub'
import BotonCompartirFacebook from '../../../components/BotonCompartirFacebook';
import BotonCompartirWhatsApp from '../../../components/BotonCompartirWhatsapp';
import BotonCompartirX from '../../../components/BotonCompartirX';
import TePuedeInteresar from '../../../components/TePuedeInteresar';
import OptimizedImage from '../../../components/OptimizedImage';


export async function generateMetadata({ params }) {
  try {
    const p = await params;

    const res = await fetch(`https://terraviva-api-new.vercel.app/api/noticia/${p.id}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error("Error al cargar noticia");
    }

    const data = await res.json();
    const noticia = data.noticia[0];

    if (!noticia) {
      return {
        title: 'Noticia no encontrada',
        description: 'No pudimos encontrar la noticia solicitada.',
      };
    }

    // Función para quitar HTML si quisieras usar 'texto'
    const stripHtml = (html) => (html || "").replace(/<[^>]*>?/gm, '').trim();

    // Usamos 'descripcion' que ya viene limpio del backend
    const descripcionLimpia = noticia.descripcion
      ? noticia.descripcion
      : stripHtml(noticia.texto).slice(0, 160); // fallback

    return {
      title: noticia.titulo,
      description: descripcionLimpia,
      openGraph: {
        title: noticia.titulo,
        description: descripcionLimpia,
        images: [
          {
            url: noticia.img_portada,
            width: 1200,
            height: 630,
            alt: `Imagen de ${noticia.titulo}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: noticia.titulo,
        description: descripcionLimpia,
        images: [noticia.img_portada],
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


export default async function ArticlePage({ params }) {

  const p = await params
  try {
    const res = await fetch(`https://terraviva-api-new.vercel.app/api/noticia/${p.id}`, {
      // cache: 'no-store' // opcional si querés evitar cache
    });

    if (!res.ok) {
      throw new Error("Error al cargar noticia");
    }

    const data = await res.json();
    const noticia = data.noticia[0];

    function convertirFecha(fecha) {
      // Obtenemos el nombre del día de la semana
      const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      // eslint-disable-next-line no-unused-vars
      const diaSemana = diasSemana[new Date(fecha).getDay()];

      // Obtenemos el día del mes
      const diaMes = new Date(fecha).getDate();

      // Obtenemos el nombre del mes
      const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const mes = meses[new Date(fecha).getMonth()];

      // Obtenemos el año
      const ano = new Date(fecha).getFullYear();

      // Formateamos la fecha
      const fechaFormateada = `${diaSemana} ${diaMes} de ${mes} del ${ano}`;

      return fechaFormateada;
    }

    return (
      <>
      <div className="container mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Contenido principal de la nota */}
        <article className="md:col-span-3 space-y-4">
          {/* Provincia */}
          <Title title={noticia.provincia} />

          {/* Título */}
          <h1 className="text-2xl md:text-4xl font-bold leading-tight text-[#333]">
            {noticia.titulo}
          </h1>

          {/* Autor y fecha */}
          <div className="flex items-center space-x-2">
            {/* <img src={noticia.fotoEditor} alt={noticia.editor} className='h-8 w-8'/> */}
            {/* <span>{noticia.editor}</span> */}
            <span className='text-sm text-[#333]'>{convertirFecha(noticia.created_at)}</span>
          </div>

          {/* Imagen principal */}
          <div className="overflow-hidden rounded">
            <OptimizedImage
                    url={noticia.img_portada}
                    alt={noticia.titulo}
                    crop="fill"
                    height={580}
                    width={960}
                    className="w-full object-cover"
                  />
          </div>
          {/* Botones compartir */}
          <div className="flex w-full justify-end space-x-2 mt-4">
            <BotonCompartirFacebook url={`https://www.terraviva.com.ar/noticia/${noticia._id}`}/>
            <BotonCompartirWhatsApp url={`https://www.terraviva.com.ar/noticia/${noticia._id}`}/>
            <BotonCompartirX url={`https://www.terraviva.com.ar/noticia/${noticia._id}`}/>
          </div>
          {/* Texto de la nota */}
          <div className="space-y-4 text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: noticia.texto }}>
          </div>


        </article>

        {/* Aside de publicidad y redes (lo mantienes como ya tienes) */}
        <aside className="flex flex-col gap-4">
          <AsidePub />
        </aside>
      </div>
        <TePuedeInteresar />
      
      </>
    );
  } catch (error) {
    console.error(error);
    return (
      <p className="text-center text-red-600 mt-10">Error al cargar la noticia</p>
    );
  }
}
