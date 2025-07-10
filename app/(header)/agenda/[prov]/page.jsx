import Title from '../../../components/Title'
import HeaderAgenda from "../../../components/HeaderAgenda";
import ListaEventos from "../../../components/ListaEventos";

export async function generateMetadata ({ params }) {
  const p = await params
  const nombreProvincia = p.prov
        .split('-')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)) // Capitalizar cada palabra
        .join(' ');

    return {
      title: `La agenda mas completa del país. - ${nombreProvincia}`,
      description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
      openGraph: {
        title: `La agenda mas completa del país. - ${nombreProvincia}`,
        description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
        images: [
          {
            url: "https://res.cloudinary.com/dwjhbrsmf/image/upload/v1752117968/agenda-metadata_y7bgxv.png",
            width: 1200,
            height: 630,
            alt: `Imagen de ${`La agenda mas completa del país. - ${nombreProvincia}`}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `La agenda mas completa del país. - ${nombreProvincia}`,
        description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
        image: "https://res.cloudinary.com/dwjhbrsmf/image/upload/v1752117968/agenda-metadata_y7bgxv.png",
      },
    };
}

export default async function page({ params }) {
  try {
    const p = await params;
    // Fetch noticias
    const eventos = await fetch("https://terraviva-api-new.vercel.app/api/eventos/1/1", {
      // cache: 'no-store'
    });
    const eventosData = await eventos.json();
    const event = eventosData ?? [];

    return (
      <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
        {/* Grid principal de 9 noticias */}
        <Title title="Agenda"/>
        <HeaderAgenda provincia={p.prov}/>
        <ListaEventos provincia={p.prov} />
        {/* Aside derecho para publicidad + redes
                <AsidePub /> */}
      </div>
    );
  } catch (error) {
    console.error("Error al cargar noticias o publicidades:", error);
    return <p className="text-center">Error al cargar noticias.</p>;
  }
}
