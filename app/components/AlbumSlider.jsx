"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export default function AlbumSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mb-4"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Foto ${idx+1}`} className="w-full object-cover max-h-[600px] mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Thumbs]}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Miniatura ${idx+1}`} className="cursor-pointer object-cover h-20 w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
