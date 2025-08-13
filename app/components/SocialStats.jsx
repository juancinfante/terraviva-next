import Title from './Title'

export default function SocialStats() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <Title title="Redes" />
      <ul className="flex flex-col gap-2 mt-5">
        <li>
          <a
            href="https://www.facebook.com/terravivafolclore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center bg-blue-600 text-white px-2 py-1 rounded"
          >
            <span className="flex items-center gap-1">
              <img src="/facebook-svgrepo-com.svg" className="w-5" alt="Facebook" />
              Facebook
            </span>
            <span>+287mil</span>
          </a>
        </li>

        <li>
          <a
            href="https://x.com/terravivanoa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center bg-black text-white px-2 py-1 rounded"
          >
            <span className="flex items-center gap-1">
              <img src="/x-svgrepo-com.svg" className="w-5" alt="Twitter" />
              X
            </span>
            <span>+1800</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/user/terravivafolclore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center bg-red-600 text-white px-2 py-1 rounded"
          >
            <span className="flex items-center gap-1">
              <img src="/youtube-svgrepo-com.svg" className="w-5" alt="YouTube" />
              YouTube
            </span>
            <span>+1000</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/terravivafolclore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center bg-red-700 text-white px-2 py-1 rounded"
          >
            <span className="flex items-center gap-1">
              <img src="/insta-svgrepo-com.svg" className="w-5" alt="Instagram" />
              Instagram
            </span>
            <span>+78mil</span>
          </a>
        </li>
      </ul>
    </div>

  );
}
