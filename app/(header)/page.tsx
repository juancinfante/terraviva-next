import Navbar from "../components/Navbar";
import NewsSection from "../components/NewsSection";
import MoreNewsSection from "../components/MoreNewsSection";
import GallerySection from "../components/GallerySection";
import Footer from '../components/Footer'
import BannerPrincipal from '../components/BannerPrincipal'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <NewsSection  />
      <BannerPrincipal />
      <MoreNewsSection  />
      <GallerySection />
      <Footer />
    </div>
  );
}
