import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function SocialStats() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-2 text-black">Redes</h2>
        <div className="h-1 w-12 bg-red-600 mb-4"></div>
      <ul className="flex flex-col gap-2">
        <li className="flex justify-between items-center bg-blue-600 text-white px-2 py-1 rounded">
          <span className="flex items-center gap-1">
            <FaFacebookF /> Facebook
          </span>
          <span>+242mil</span>
        </li>
        <li className="flex justify-between items-center bg-black text-white px-2 py-1 rounded">
          <span className="flex items-center gap-1">
            <FaXTwitter />
          </span>
          <span>+1800</span>
        </li>
        <li className="flex justify-between items-center bg-red-600 text-white px-2 py-1 rounded">
          <span className="flex items-center gap-1">
            <FaYoutube /> YouTube
          </span>
          <span>+1000</span>
        </li>
        <li className="flex justify-between items-center bg-red-700 text-white px-2 py-1 rounded">
          <span className="flex items-center gap-1">
            <FaInstagram /> Instagram
          </span>
          <span>+36mil</span>
        </li>
      </ul>
    </div>
  );
}
