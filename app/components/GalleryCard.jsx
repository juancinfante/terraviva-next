import OptimizedImage from "./OptimizedImage";

export default function GalleryCard({ date, title, image }) {
  return (
    <div className="flex flex-col">
      <a href="">
        <div className="overflow-hidden rounded">
          <OptimizedImage
            url={image}
            alt={title}
            crop="fill"
            width={400}
            height={300}
            className="w-full object-cover"
          />
        </div>
        <span className="text-xs text-gray-600 mt-2">{date}</span>
        <h3 className="text-sm font-bold text-black line-clamp-1 hover:underline">{title}</h3>
      </a>
    </div>
  );
}
