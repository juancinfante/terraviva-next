import SmallNewsCard from "./SmallNewsCard";
import VerMasBtn from './VerMasBtn'
import AsidePub from './AsidePub'
import Title from './Title'
export default async function TePuedeInteresar() {
    try {
        // Fetch noticias
        const noticiasRes = await fetch("https://terraviva-api-new.vercel.app/api/noticias/6/1", {
            // cache: 'no-store'
        });
        console.log(noticiasRes)
        const noticiasData = await noticiasRes.json();
        const noticias = noticiasData.docs ?? [];

        return (
            <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
                {/* Grid principal de 9 noticias */}
                <Title title="Te puede interesar"/>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {noticias.map((n, index) => (
                        <SmallNewsCard
                            key={n._id || index}
                            noticia={n}
                        />
                    ))}
                    <VerMasBtn />
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error al cargar noticias o publicidades:", error);
        return <p className="text-center">Error al cargar noticias.</p>;
    }
}
