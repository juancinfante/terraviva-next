export default function NewsCard({ title, province, image, extraClass = "" }) {
  return (
    <div className={`relative w-full h-60 md:h-full overflow-hidden ${extraClass}`}>
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
        <span className=" text-white text-xs font-semibold p-2 rounded" style={{
                background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
            }}>{province}</span>
        <h3 className="text-white text-base md:text-xl font-bold mt-2">{title}</h3>
      </div>
    </div>
  );
}
