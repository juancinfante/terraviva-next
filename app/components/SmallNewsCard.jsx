import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

export default function SmallNewsCard({ noticia }) {
  return (
    <Link href={`/noticia/${noticia.slugTitulo}`} className="h-full">
    <div className="flex flex-col bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative">
        {/* <img src={noticia.img_portada} alt={noticia.titulo} className="w-full h-55 object-cover" /> */}
        <OptimizedImage
                              url={noticia.img_portada}
                              alt={noticia.titulo}
                              crop="fill"
                              width={300}
                              height={250}
                              className="w-full object-cover"
                            />
        <span
          className="absolute bottom-2 left-2 text-xs font-semibold px-2 py-1"
          style={{
            background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
          }}
        >
          {noticia.provincia}
        </span>
      </div>
      <div className="p-3 flex-1 flex">
        <h2 className="text-md p-0 font-semibold text-black line-clamp-3 hover:underline cursor-pointer">
          {noticia.titulo}
        </h2>
      </div>
    </div>
    </Link>
  );
}
