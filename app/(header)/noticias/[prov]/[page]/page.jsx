import Link from "next/link";
import Title from "../../../../components/Title";
import AsidePub from "../../../../components/AsidePub";
import OptimizedImage from "../../../../components/OptimizedImage";

export async function generateMetadata({ params }) {
  try {
    const p = await params;
    
    if (!p.prov) {
      return {
        title: 'galeria no encontrada',
        description: 'No pudimos encontrar la galeria solicitada.',
      };
    }
    return {
      title: `${decodeURIComponent(p.prov)} - Terraviva`,
      description: "Nuestro folclore, nuestra gente.",
      openGraph: {
        title: `${decodeURIComponent(p.prov)} - Terraviva`,
        description: "Nuestro folclore, nuestra gente.",
        images: [
          {
            url: "https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751776811/terraviva/Captura_lfcizt.png",
            width: 1200,
            height: 630,
            alt: `Imagen de ${decodeURIComponent(p.prov)} - Terraviva`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${decodeURIComponent(p.prov)} - Terraviva`,
        description: "Nuestro folclore, nuestra gente.",
        image: "https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751776811/terraviva/Captura_lfcizt.png",
      },
    };
  } catch (error) {
    return {
      title: 'Error al cargar noticia',
      description: 'Hubo un problema al obtener los datos de la noticia.',
    };
  }
}

export default async function page({ params }) {
  const p = await params;
  const limit = 8; // cantidad de noticias por página
  let noticias = [];
  let data = {};

  try {
    let res = await fetch(`http://localhost:4001/api/noticias/${p.prov}/${limit}/${p.page}`, {
      cache: 'no-store'
    });

    if (!res.ok) throw new Error("Error al obtener noticias");

    const json = await res.json();
    noticias = json.docs;
    data = json; // por si necesitás totalPages, etc.

  } catch (error) {
    console.error(error);
    return <p className="text-center">Error al cargar noticias.</p>;
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <Title title={noticias[0].provincia} />
      <div className="flex flex-col gap-4 md:col-span-3">
        {/* Listado de noticias */}
        {noticias.map((n, index) => (
          <Link href={`/noticia/${n.slugTitulo}`} key={n._id || index}>
            <div className="flex gap-4 bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <OptimizedImage
                url={n.img_portada}
                alt={n.titulo}
                crop="fill"
                width={320}
                height={240}
                className="object-cover"
              />
              <div className="w-full">
                <h2 className="font-semibold leading-tight text-black text-2xl pt-4 hover:underline">{n.titulo}</h2>
                <p className="text-black text-sm">{n.texto}</p>
              </div>
            </div>
          </Link>
        ))}

        {/* Paginación */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {data.hasPrevPage ?
            <Link href={`/noticias/${p.prov}/${(parseInt(p.page) - 1)}`} className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100">&lt;</Link>
            :
            <Link href="" className="px-2 py-1 border rounded text-gray-700 bg-gray-400 pointer-events-none">&lt;</Link>}
          <span className="px-3 py-1 bg-red-700 text-white rounded">{p.page}</span>
          {data.hasNextPage ?
            <Link href={`/noticias/${p.prov}/${(parseInt(p.page) + 1)}`} className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100">&gt;</Link>
            :
            <Link href="" className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-400 pointer-events-none">&gt;</Link>}
        </div>
      </div>
      <AsidePub />
    </div>
  );
}
