// app/galerias/[id]/page.jsx
import AlbumSlider from "../../../../components/AlbumSlider";
import AsidePub from "../../../../components/AsidePub";

export default async function AlbumPage({ params }) {
  const id = params.id;
  const res = await fetch(`https://terraviva-api-new.vercel.app/api/album/${id}`, { cache: 'no-store' });
  const album = await res.json();
  const fotos = album.album ?? [];

  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
      <div className="md:col-span-3">
        <h1 className="text-2xl font-bold mb-1">{album.nombre}</h1>
        <p className="text-gray-600 mb-2">{new Date(album.fecha).toLocaleDateString("es-AR", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
        <p className="text-gray-600 mb-4">PH: {album.ph}</p>

        <AlbumSlider images={fotos} />
      </div>
      <AsidePub />
    </div>
  );
}
