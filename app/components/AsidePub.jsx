import SocialStats from './SocialStats'
import OptimizedImage from './OptimizedImage';
export default async function AsidePub({ seccion }) {
  // Fetch publicidades
  const publisRes = await fetch("https://terraviva-api-new.vercel.app/api/publis",{ cache: 'no-store' });
  const publisData = await publisRes.json();
  const publis = publisData.publis ?? [];

  // Función para saber si una fecha ya pasó
  function fechaPasada(fecha) {
    if (!fecha) return true;
    const partes = fecha.split("-");
    const fechaComparar = new Date(partes[0], partes[1] - 1, partes[2]);
    const hoy = new Date();
    return fechaComparar > hoy;
  }

  // Filtrar y ordenar por sección recibida
  const publicidadesSeccion = publis
    .filter(p =>
      p.colocar_en &&
      typeof p.colocar_en[0]?.[seccion] === "number" &&
      p.colocar_en[0][seccion] >= 1 &&
      p.colocar_en[0][seccion] <= 8 &&
      (!p.egreso || fechaPasada(p.egreso))
    )
    .sort((a, b) => a.colocar_en[0][seccion] - b.colocar_en[0][seccion]);

  try {
    return (
      <aside className="flex flex-col gap-4">
        {publicidadesSeccion.map((publi, idx) => (
          <div key={publi._id || idx} className="bg-gray-100 rounded overflow-hidden">
            <a href={publi.link} target="_blank" rel="noreferrer">
              <OptimizedImage
                url={publi.foto}
                alt={publi.titulo}
                width={280}
                crop="fill"
                className="w-full object-cover"
              />
            </a>
          </div>
        ))}
        <SocialStats />
      </aside>
    );
  } catch (error) {
    console.error("Error al cargar publicidades:", error);
    return <p className="text-center">Error al cargar publicidades.</p>;
  }
}
