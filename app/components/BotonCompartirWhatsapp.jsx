'use client';
// import { FaWhatsapp } from 'react-icons/fa6';


export default function BotonCompartirWhatsApp({ url }) {
  const handleClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;

    window.open(
      whatsappUrl,
      'Compartir en WhatsApp',
      'width=600,height=400,scrollbars=no,toolbar=no,menubar=no,noopener,noreferrer'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center bg-green-600 hover:bg-green-700 cursor-pointer p-2 rounded-full"
    >
       <img src='/whatsapp-svgrepo-com.svg' className="w-5"/>
    </button>
  );
}
