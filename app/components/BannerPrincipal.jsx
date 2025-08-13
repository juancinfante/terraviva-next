import OptimizedImage from "./OptimizedImage";

// app/components/BannerSantiago.jsx
export default async function BannerSantiago() {
  try {
    const res = await fetch("https://terraviva-api-new.vercel.app/api/get-banner", {
      cache: 'no-store' // <-- usá esto si querés que siempre sea fresh (sin cache)
    });

    if (!res.ok) throw new Error("Error al obtener banners");

    const data = await res.json();
    const banners = data.banners;

    if (!banners || banners.length === 0) return null;

    const banner = banners[0];

    return (
      <>
        {/* Pantalla grande */}
        <div className='container max-w-7xl mx-auto px-4 hidden md:block'>
          <div style={{ width: "100%" }}>
            <a href={banner.url} target='_blank' rel='noreferrer'>
              <img
                src={banner.bannerFull}
                className='w-full mt-4 banner-sgo'
                style={{ height: 120 }}
                alt="Banner Santiago"
              />
            </a>
          </div>
        </div>
        {/* Mobile */}
        <div className='container block md:hidden px-4'>
          <div style={{ width: "100%", minHeight: 130 }}>
            <a href={banner.url} target='_blank' rel='noreferrer'>
              <OptimizedImage
                url={banner.bannerMobile}
                alt="Terraviva, nuestro folclore nuestra gente"
                crop=""
                height={130}
                width={380}
                className="object-cover w-full max-h-[130px]"
              />
            </a>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error al cargar banner:", error);
    return null;
  }
}
