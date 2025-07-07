'use client';

export default function BotonCompartirX({ url, texto = '' }) {
  const handleClick = () => {
    // URL para compartir en Twitter/X
    const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`;

    window.open(
      twitterUrl,
      '_blank',
      'width=600,height=400,scrollbars=no,toolbar=no,menubar=no,noopener,noreferrer'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center bg-black hover:bg-gray-900 cursor-pointer rounded-full p-2"
      aria-label="Compartir en X"
    >
       <img src='/x-svgrepo-com.svg' className="w-5"/>
    </button>
  );
}
