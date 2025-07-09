import Title from '../../components/Title'
import HeaderAgenda from "../../components/HeaderAgenda";
import ListaEventos from "../../components/ListaEventos";
export default async function page() {
  try {
    // Fetch noticias
    const eventos = await fetch("https://terraviva-api-new.vercel.app/api/eventos/1/1", {
      // cache: 'no-store'
    });
    const eventosData = await eventos.json();
    const event = eventosData ?? [];

    return (
      <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
        {/* Grid principal de 9 noticias */}
        <Title title="Agenda"/>
        <HeaderAgenda provincia="Todas"/>
        <ListaEventos provincia="" />
        {/* <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {event.map((n, index) => (
            <CardAgenda
              key={n._id || index}
              noticia={n}
            />
          ))}
        </div> */}
        {/* Aside derecho para publicidad + redes
                <AsidePub /> */}
      </div>
    );
  } catch (error) {
    console.error("Error al cargar noticias o publicidades:", error);
    return <p className="text-center">Error al cargar noticias.</p>;
  }
}
