import NewsSection from "../components/NewsSection";
import MoreNewsSection from "../components/MoreNewsSection";
import GallerySection from "../components/GallerySection";
import BannerPrincipal from '../components/BannerPrincipal'

export const generateMetadata = () => {
  return {
    title: 'Terraviva - Nuestro folclore, nuestra gente.',
    description: 'Diario digital de folclore.',
    openGraph: {
      title: 'Terraviva - Nuestro folclore, nuestra gente.',
      description: 'Diario digital de folclore.',
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
      title: 'Título Twitter fijo',
      description: 'Descripción Twitter fija',
      images: ['https://misitio.com/og-image.jpg'],
    },
  };
};

export default function Home() {
  return (
    <div className="">
      <NewsSection  />
      <BannerPrincipal />
      <MoreNewsSection  />
      <GallerySection />
    </div>
  );
}
