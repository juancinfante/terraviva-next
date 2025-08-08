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
      title: `La agenda mas completa del país - ${nombreProvincia}`,
      description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
      openGraph: {
        title: `La agenda mas completa del país - ${nombreProvincia}`,
        description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
        images: [
          {
            url: "https://res.cloudinary.com/dwjhbrsmf/image/upload/w_1200,h_637,c_fill,q_auto,f_auto/v1752131241/agenda-terraviva.jpg",
            width: 1200,
            height: 630,
            alt: `Imagen de ${`La agenda mas completa del país. - ${nombreProvincia}`}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `La agenda mas completa del país - ${nombreProvincia}`,
        description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
        image: "https://res.cloudinary.com/dwjhbrsmf/image/upload/w_1200,h_637,c_fill,q_auto,f_auto/v1752131241/agenda-terraviva.jpg",
      },
    };
}

export default async function page({ params }) {
  try {
    const p = await params;

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
