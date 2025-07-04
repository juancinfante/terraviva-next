import Image from "next/image";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import MoreNewsSection from "./components/MoreNewsSection";
import GallerySection from "./components/GallerySection";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <NewsSection  />
      <MoreNewsSection  />
      <GallerySection />
    </div>
  );
}
