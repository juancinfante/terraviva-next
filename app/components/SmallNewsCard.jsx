export default function SmallNewsCard({ title, province, image }) {
  return (
    <div className="flex flex-col bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">

      <div className="relative">
        <img src={image} alt={title} className="w-full h-55 object-cover" />
        <span
          className="absolute bottom-2 left-2 text-xs font-semibold px-2 py-1"
          style={{
            background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
          }}
        >
          {province}
        </span>
      </div>
      <div className="p-3 flex-1 flex">
        <h3 className="text-md p-0 font-semibold text-black line-clamp-3 hover:underline cursor-pointer">
          {title}
        </h3>
      </div>
    </div>
  );
}
