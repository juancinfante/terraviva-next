import SmallNewsCard from "./SmallNewsCard";
import SocialStats from './SocialStats'
import VerMasBtn from './VerMasBtn'

export default async function MoreNewsSection() {
    try {
        // Fetch noticias
        const noticiasRes = await fetch("https://terraviva-api-new.vercel.app/api/masnoticias", {
            // cache: 'no-store'
        });
        const noticiasData = await noticiasRes.json();
        const noticias = noticiasData ?? [];

        // Fetch publicidades
        const publisRes = await fetch("https://terraviva-api-new.vercel.app/api/publis", {
            // cache: 'no-store'
        });
        const publisData = await publisRes.json();
        const publis = publisData.publis ?? [];

        // Función para saber si una fecha ya pasó
        function fechaPasada(fecha) {
            const partes = fecha.split('-');
            const fechaComparar = new Date(partes[0], partes[1] - 1, partes[2]);
            const hoy = new Date();
            return fechaComparar > hoy;
        }

        // Filtrar y ordenar publicidades que tengan 'inicio' entre 1 y 8 Y que no hayan vencido
        const publicidadesInicio = publis
            .filter(p =>
                p.colocar_en &&
                p.colocar_en[0]?.inicio >= 1 &&
                p.colocar_en[0]?.inicio <= 8 &&
                (!p.fecha_fin || fechaPasada(p.fecha_fin))
            )
            .sort((a, b) => a.colocar_en[0].inicio - b.colocar_en[0].inicio);

        return (
            <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
                {/* Grid principal de 9 noticias */}
                <div className=" md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {noticias.map((n, index) => (
                        <SmallNewsCard
                            key={n._id || index}
                            title={n.titulo}
                            province={n.provincia}
                            image={n.img_portada}
                        />
                    ))}
                    <VerMasBtn />
                </div>

                {/* Aside derecho para publicidad + redes */}
                <aside className="flex flex-col gap-4">
                    {publicidadesInicio.map((publi, idx) => (
                        <div key={publi._id || idx} className="bg-gray-100 rounded overflow-hidden">
                            <a href={publi.url} target="_blank" rel="noreferrer">
                                <img src={publi.foto} alt={publi.titulo || "Publicidad"} className="w-full" />
                            </a>
                        </div>
                    ))}
                    <SocialStats />
                </aside>
            </div>
        );
    } catch (error) {
        console.error("Error al cargar noticias o publicidades:", error);
        return <p className="text-center">Error al cargar noticias.</p>;
    }
}
