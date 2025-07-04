export default function GalleryCard({ date, title, image }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <span className="text-xs text-gray-600 mt-2">{date}</span>
      <h3 className="text-sm font-bold text-black">{title}</h3>
    </div>
  );
}
