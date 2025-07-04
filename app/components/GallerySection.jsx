import GalleryCard from "./GalleryCard";

export default function GallerySection() {
  const galleries = [
    {
      date: "Sábado 25 de Enero del 2025",
      title: "Festival Nacional de Cosquín - 2° Noche",
      image: "https://picsum.photos/id/1001/400/250",
    },
    {
      date: "Sábado 25 de Enero del 2025",
      title: "Peña Añoranza Santiagueña - 3° Noche",
      image: "https://picsum.photos/id/1002/400/250",
    },
    {
      date: "Sábado 25 de Enero del 2025",
      title: "Peña La Salamanca - Domingo 26",
      image: "https://picsum.photos/id/1003/400/250",
    },
    {
      date: "Viernes 24 de Enero del 2025",
      title: "Peña Añoranza Santiagueña - 2° Noche",
      image: "https://picsum.photos/id/1004/400/250",
    },
    {
      date: "Jueves 23 de Enero del 2025",
      title: "Festival de la Chacarera",
      image: "https://picsum.photos/id/1005/400/250",
    },
    {
      date: "Miércoles 22 de Enero del 2025",
      title: "Peña de los Abuelos",
      image: "https://picsum.photos/id/1006/400/250",
    },
    {
      date: "Martes 21 de Enero del 2025",
      title: "Noche de jóvenes talentos",
      image: "https://picsum.photos/id/1007/400/250",
    },
    {
      date: "Lunes 20 de Enero del 2025",
      title: "Peña Folklórica Solidaria",
      image: "https://picsum.photos/id/1008/400/250",
    },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-4 py-6">
      <h2 className="text-lg font-bold mb-2 text-black">Galerías</h2>
      <div className="h-1 w-12 bg-red-600 mb-4"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {galleries.map((gal, index) => (
          <GalleryCard
            key={index}
            date={gal.date}
            title={gal.title}
            image={gal.image}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
          VER MÁS
        </button>
      </div>
    </section>
  );
}
