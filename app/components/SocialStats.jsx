import Title from './Title'

export default function SocialStats() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <Title title="Redes" />
      <ul className="flex flex-col gap-2">
        <a href="https://www.facebook.com/terravivafolclore" target="_blank" rel="noopener noreferrer">
          <li className="flex justify-between items-center bg-blue-600 text-white px-2 py-1 rounded">
            <span className="flex items-center gap-1">
              <img src='/facebook-svgrepo-com.svg' className="w-5" />
              Facebook
            </span>
            <span>+242mil</span>
          </li>
        </a>
        <a href="https://x.com/terravivanoa" target="_blank" rel="noopener noreferrer">
          <li className="flex justify-between items-center bg-black text-white px-2 py-1 rounded">
            <span className="flex items-center gap-1">
              <img src='/x-svgrepo-com.svg' className="w-5" />
              X
            </span>
            <span>+1800</span>
          </li>
        </a>
        <a href="https://www.youtube.com/user/terravivafolclore" target="_blank" rel="noopener noreferrer">

          <li className="flex justify-between items-center bg-red-600 text-white px-2 py-1 rounded">
            <span className="flex items-center gap-1">
              <img src='/youtube-svgrepo-com.svg' className="w-5" />
              YouTube
            </span>
            <span>+1000</span>
          </li>
        </a>
        <a href="https://www.instagram.com/terravivafolclore" target="_blank" rel="noopener noreferrer">

          <li className="flex justify-between items-center bg-red-700 text-white px-2 py-1 rounded">
            <span className="flex items-center gap-1">
              <img src='/insta-svgrepo-com.svg' className="w-5" />
              Instagram
            </span>
            <span>+36mil</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
