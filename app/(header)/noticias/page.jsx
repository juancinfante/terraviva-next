import Link from "next/link";
import Title from "../../components/Title";
import AsidePub from "../../components/AsidePub";
import OptimizedImage from "../../components/OptimizedImage";
import SmallNewsCard from "../../components/SmallNewsCard";

export const generateMetadata = () => {
  return {
    title: 'Noticias - Terraviva',
    description: 'Diario digital de folclore.',
    openGraph: {
      title: 'Noticias - Terraviva',
      description: 'Diario digital de folclore.',
      images: [
        {
          url: 'https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751776811/terraviva/Captura_lfcizt.png',
          width: 1200,
          height: 630,
          alt: 'Noticias - Terraviva',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Noticias - Terraviva',
      description: 'Diario digital de folclore.',
      image: 'https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751776811/terraviva/Captura_lfcizt.png',
    },
  };
};

export default async function page({ searchParams }) {

  const sp = await searchParams

  const page = parseInt(sp.p) || 1;
  const limit = 8;
  const b = sp.b || undefined;

  let noticias = [];
  let data = {};

  try {

    let res;

    if (b) {
      // Si hay búsqueda, usamos endpoint de búsqueda
      res = await fetch(`http://localhost:4001/api/noticia/b/${b}/${limit}/${page}`, {
        cache: 'no-store'
      });
    } else {
      // Si no, traemos las noticias normales
      res = await fetch(`http://localhost:4001/api/noticias/${limit}/${page}`, {
        cache: 'no-store'
      });
    };

    if (!res.ok) throw new Error("Error al obtener noticias");

    const json = await res.json();
    // ⚠ Aquí detectamos cuál formato llegó:
    if (json.noticia && json.noticia.docs) {
      noticias = json.noticia.docs;
      data = json.noticia; // si querés totalPages, etc.
    } else if (json.docs) {
      noticias = json.docs;
      data = json;
    } else {
      throw new Error("Respuesta inesperada de la API");
    }

  } catch (error) {
    return <p className="text-center">Error al cargar noticias.</p>;
  }
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 flex flex-col gap-4">
      <Title title={b == undefined ? "Noticias" : `Resultados de: ${b} `} />
      <div className="md:col-span-3 flex flex-col gap-5">
        {/* Listado de noticias */}
        {noticias.map((n, index) => (
          <div key={n._id || index}>
            <div className="hidden md:block" key={n._id || index}>
              <Link href={`/noticia/${n.slugTitulo}`} >
                <div className="flex gap-4 bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <OptimizedImage
                    url={n.img_portada}
                    alt={n.titulo}
                    crop="fill"
                    width={320}
                    height={240}
                    className="object-cover"
                  />
                  <div className="w-full flex flex-col gap-3">
                    <h2 className="font-semibold leading-tight text-black text-2xl pt-4 hover:underline">{n.titulo}</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="block md:hidden">
              <SmallNewsCard noticia={n} />
            </div>
          </div>
        ))}

        {/* Paginación */}
        <div className="flex justify-center items-center gap-2 m-6">

          {b == undefined ? data.hasPrevPage ?
            <Link href={`/noticias?p=${(parseInt(page) - 1)}`} className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100">&lt;</Link>
            :
            <Link href="" className="px-2 py-1 border rounded text-gray-700 bg-gray-400 pointer-events-none">&lt;</Link>
            : data.hasPrevPage ?
              <Link href={`/noticias?b=${b}&p=${(parseInt(page) - 1)}`} className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100">&lt;</Link>
              :
              <Link href="" className="px-2 py-1 border rounded text-gray-700 bg-gray-400 pointer-events-none">&lt;</Link>}
          <span className="px-3 py-1 bg-red-700 text-white rounded">{page}</span>
          {b == undefined ? data.hasNextPage ?
            <Link href={`/noticias?p=${(parseInt(page) + 1)}`} className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100">&gt;</Link>
            :
            <Link href="" className="px-2 py-1 border rounded text-gray-700 bg-gray-400 pointer-events-none">&gt;</Link>
            : data.hasNextPage ?
              <Link href={`/noticias?b=${b}&p=${(parseInt(page) + 1)}`} className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100">&gt;</Link>
              :
              <Link href="" className="px-2 py-1 border rounded text-gray-700 bg-gray-400 pointer-events-none">&gt;</Link>}
        </div>
      </div>
      <AsidePub />
    </div>
  );
}
