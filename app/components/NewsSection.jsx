import NewsCard from "./NewsCard";

export default async function NewsSection() {
  try {
    const res = await fetch("https://terraviva-api-new.vercel.app/api/noticias/3/1", {
      // cache: 'no-store'
    });
    if (!res.ok) throw new Error("Error al obtener noticias");
    const data = await res.json();
    const noticias = data.docs;

    if (!noticias || noticias.length < 3) {
      return <p>No hay noticias disponibles.</p>;
    }

    return (
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          {/* Card grande a la izquierda */}
          <div className="md:col-span-2 flex flex-col h-full">
            <NewsCard
              noticia={noticias[0]}
              extraClass="h-full"
              width={800}
              height={500}
            />
          </div>
          {/* Columna derecha con dos cards */}
          <div className="flex flex-col gap-4">
            <NewsCard
              noticia={noticias[1]}
              extraClass="h-full flex-1"
              height={209}
              width={380}
            />
            <NewsCard
              noticia={noticias[2]}
              extraClass="h-full flex-1"
              height={209}
              width={380}
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al cargar noticias:", error);
    return <p className="text-center">Error al cargar noticias.</p>;
  }
}

