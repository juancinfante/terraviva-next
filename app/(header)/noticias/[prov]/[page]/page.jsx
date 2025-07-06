import Link from "next/link";
import Title from "../../../../components/Title";
import AsidePub from "../../../../components/AsidePub";

export default async function page({ params }) {
  const p = await params;
  const limit = 8; // cantidad de noticias por página
  let noticias = [];
  let data = {};

  try {
    let res = await fetch(`https://terraviva-api-new.vercel.app/api/noticias/${p.prov}/${limit}/${p.page}`, {
        cache: 'no-store'
      });

    if (!res.ok) throw new Error("Error al obtener noticias");

    const json = await res.json();
    noticias = json.docs;
    data = json; // por si necesitás totalPages, etc.
    console.log(data)

  } catch (error) {
    console.error(error);
    return <p className="text-center">Error al cargar noticias.</p>;
  }
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <Title title="Catamarca" />
      <div className="flex flex-col gap-4 md:col-span-3">
        {/* Listado de noticias */}
        {noticias.map((n, index) => (
          <Link href={`/noticia/${n._id}`} key={n._id || index}>
            <div className="flex gap-4 bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={n.img_portada}
                alt={n.titulo}
                className="min-w-70 h-60 object-cover"
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
          <Link href="" className="px-2 py-1 border rounded text-gray-700 hover:bg-gray-100 pointer-events-none">&gt;</Link>}
        </div>
      </div>
      <AsidePub />
    </div>
  );
}
