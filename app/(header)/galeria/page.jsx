import AsidePub from "../../components/AsidePub";
import ListaGaleria from "../../components/ListaGaleria";
import Title from "../../components/Title";

export const generateMetadata = () => {
  return {
    title: 'Terraviva - Álbums',
    description: 'Terraviva - Nuestro folclore, nuestra gente.',
    openGraph: {
      title: 'Terraviva - Álbums',
      description: 'Terraviva - Nuestro folclore, nuestra gente.',
      images: [
        {
          url: 'https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751776811/terraviva/Captura_lfcizt.png',
          width: 1200,
          height: 630,
          alt: 'Terraviva - Nuestro folclore, nuestra gente.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Terraviva - Álbums',
      description: 'Terraviva - Nuestro folclore, nuestra gente.',
      image: 'https://res.cloudinary.com/dwjhbrsmf/image/upload/v1751776811/terraviva/Captura_lfcizt.png',
    },
  };
};

export default async function GaleriasPage() {
  const limit = 20;
  const page = 1;

  // Traemos la primera página SSR
  const res = await fetch(`https://terraviva-api-new.vercel.app/api/albums/${limit}/${page}`, { cache: 'no-store' });
  const data = await res.json();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 flex flex-col gap-4">
      <Title title="Álbums" />
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 gap-4">
          <ListaGaleria initialData={data.albums.docs} initialHasNext={data.albums.hasNextPage} initialPage={page} limit={limit} />
        </div>
      </div>
      <AsidePub seccion="galeria"/>
    </div>
  );
}
