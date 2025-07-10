// app/galerias/[id]/page.jsx
import AlbumSlider from "../../../../components/AlbumSlider";
import AsidePub from "../../../../components/AsidePub";
import Title from "../../../../components/Title";

export async function generateMetadata({ params }) {
  try {
    const p = await params;

    const res = await fetch(`https://terraviva-api-new.vercel.app/api/album/${p.id}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error("Error al cargar galeria[0]");
    }

  const album = await res.json();
  const galeria = album.album ?? [];

    if (!galeria[0]) {
      return {
        title: 'galeria no encontrada',
        description: 'No pudimos encontrar la galeria solicitada.',
      };
    }
    return {
      title: galeria[0].nombre,
      description: "Galería de imágenes.",
      openGraph: {
        title: galeria[0].nombre,
        description: "Galería de imágenes.",
        images: [
          {
            url: galeria[0].fotos[0],
            width: 1200,
            height: 630,
            alt: `Imagen de ${galeria[0].nombre}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: galeria[0].nombre,
        description: "Galería de imágenes.",
        images: galeria[0].fotos[0],
      },
    };
  } catch (error) {
    return {
      title: 'Error al cargar noticia',
      description: 'Hubo un problema al obtener los datos de la noticia.',
    };
  }
}

export default async function AlbumPage({ params }) {
  const p = await params;
  const res = await fetch(`https://terraviva-api-new.vercel.app/api/album/${p.id}`, { cache: 'no-store' });
  const album = await res.json();
  const galeria = album.album ?? [];
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 flex flex-col gap-4">
      <Title title="Álbum"/>
      <div className="md:col-span-3">
        <h1 className="text-2xl font-bold mb-1 mt-2 text-[#333]">{galeria[0].nombre}</h1>
        <p className="text-gray-600 mb-2">{new Date(galeria[0].fecha).toLocaleDateString("es-AR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p className="text-gray-600 mb-4">PH: {galeria[0].ph}</p>
        <AlbumSlider images={galeria[0].fotos} />
      </div>
      <AsidePub />
    </div>
  );
}
