import GalleryCard from "./GalleryCard";
import Title from "./Title";
import VerMasBtn from "./VerMasBtn";

export default async function GaleriasSection() {
  try {
    // Fetch de los albums
    const res = await fetch('https://terraviva-api-new.vercel.app/api/albums/8/1', {
      // cache: 'no-store' // opcional si querés datos siempre frescos
    });
    const data = await res.json();
    const galleries = data.albums.docs ?? []; // data.docs es el array que devuelve tu API

    function formatDate(fecha) {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const date = new Date(fecha);

        const dayOfWeek = days[date.getDay()];
        const dayOfMonth = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${dayOfWeek} ${dayOfMonth} de ${month} del ${year}`;
    }

    return (
      <section className="container mx-auto max-w-7xl px-4 py-6">
        <Title title="Galería"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleries.map((gal, index) => (
            <GalleryCard
              key={gal._id || index}
              date={formatDate(gal.fecha)}           // adaptá si la propiedad de fecha tiene otro nombre
              title={gal.nombre}        // adaptá si el campo se llama distinto
              image={gal.portada}   // adaptá según la propiedad que tengas
            />
          ))}
        </div>

        <VerMasBtn />
      </section>
    );

  } catch (error) {
    console.error("Error al cargar galerías:", error);
    return <p className="text-center text-red-500">Error al cargar galerías.</p>;
  }
}
