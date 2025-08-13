import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

export default function NewsCard({ noticia, extraClass = "", height, width }) {
  return (
    <Link href={`/noticia/${noticia.slugTitulo}`} className="h-full" rel="preload">
    <div className={`relative w-full h-60 md:h-full overflow-hidden ${extraClass}`}>
        <OptimizedImage
                    url={noticia.img_portada}
                    alt={noticia.titulo}
                    crop="fill"
                    className="w-full object-cover"
                    height={height}
                    width={width}
                  />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
        <span className=" text-white text-xs font-semibold p-2 rounded" style={{
          background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
            }}>{noticia.provincia}</span>
        <h1 className="text-white text-xl md:text-xl font-bold mt-2 hover:underline">{noticia.titulo}</h1>
      </div>
    </div>
    </Link>
  );
}
