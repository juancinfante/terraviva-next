export default function SmallNewsCard({ title, province, image }) {
  return (
    <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <span className="absolute bottom-2 left-2 text-xs font-semibold px-2 py-1 rounded"  style={{
                background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
            }}>
          {province}
        </span>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibol text-black">{title}</h3>
      </div>
    </div>
  );
}
