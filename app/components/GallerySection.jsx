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

    return (
      <section className="container mx-auto max-w-7xl px-4 py-6 gap-4 flex flex-col">
        <Title title="Galería"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleries.map((gal, index) => (
            <GalleryCard
              key={gal._id || index}
              evento={gal}  // adaptá según la propiedad que tengas
            />
          ))}
        </div>
        <VerMasBtn pagina="galeria"/>
      </section>
    );

  } catch (error) {
    console.error("Error al cargar galerías:", error);
    return <p className="text-center text-red-500">Error al cargar galerías.</p>;
  }
}
