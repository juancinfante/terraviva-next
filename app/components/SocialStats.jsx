import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import Title from './Title'

export default function SocialStats() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <Title title="Redes"/>
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
