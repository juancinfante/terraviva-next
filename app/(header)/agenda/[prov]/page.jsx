import Title from '../../../components/Title'
import HeaderAgenda from "../../../components/HeaderAgenda";
import ListaEventos from "../../../components/ListaEventos";
export default async function page({ params }) {
  try {
    const p = await params;
    // Fetch noticias
    const eventos = await fetch("http:localhost:4001/api/eventos/1/1", {
      // cache: 'no-store'
    });
    const eventosData = await eventos.json();
    const event = eventosData ?? [];

    return (
      <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
        {/* Grid principal de 9 noticias */}
        <Title title="Agenda"/>
        <HeaderAgenda provincia={p.prov}/>
        <ListaEventos provincia={p.prov} />
        {/* Aside derecho para publicidad + redes
                <AsidePub /> */}
      </div>
    );
  } catch (error) {
    console.error("Error al cargar noticias o publicidades:", error);
    return <p className="text-center">Error al cargar noticias.</p>;
  }
}
