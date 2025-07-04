import NewsCard from "./NewsCard";

export default function NewsSection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        
        {/* Card grande a la izquierda */}
        <div className="md:col-span-2 flex flex-col h-full">
          <NewsCard
            title="Cuatro de semanas a puro festejos por el cumpleaños de la capital de Santiago"
            province="Santiago del Estero"
            image="https://picsum.photos/id/1011/800/500"
            extraClass="h-full"  // pasamos extraClass para forzar altura
          />
        </div>

        {/* Columna derecha con dos cards */}
        <div className="flex flex-col gap-4 h-full">
          <NewsCard
            title="Marcha de los Bombos 2025: así serán las vigilias, homenajes y recorridos"
            province="Santiago del Estero"
            image="https://picsum.photos/id/1012/400/250"
          />
          <NewsCard
            title="Tucumán: Celebrarán el Primer Festival de El Alto de la Lechuza"
            province="Tucuman"
            image="https://picsum.photos/id/1013/400/250"
          />
        </div>
      </div>
    </div>
  );
}
