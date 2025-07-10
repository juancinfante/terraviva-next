import Title from '../../components/Title'
import HeaderAgenda from "../../components/HeaderAgenda";
import ListaEventos from "../../components/ListaEventos";

export const generateMetadata = () => {
    return {
      title: "La agenda mas completa del país",
      description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
      openGraph: {
        title: "La agenda mas completa del país",
        description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
        images: [
          {
            url: "https://rescloudinary.com/dwjhbrsmf/image/upload/v1752117968/agenda-metadata_y7bgxv.png",
            width: 1200,
            height: 630,
            alt: `Imagen de ${"La agenda mas completa del país"}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: "La agenda mas completa del país",
        description: "Descubrí la agenda más completa del país para no perderte ningún festival, peña o espectáculo de folclore.",
        image: "https://res.cloudinary.com/dwjhbrsmf/image/upload/v1752117968/agenda-metadata_y7bgxv.png",
      },
    };
}

export default async function page() {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
        <Title title="Agenda"/>
        <HeaderAgenda provincia="Todas"/>
        <ListaEventos provincia=""/>
      </div>
    );

}
