'use client';

export default function BotonCompartirFacebook({ url }) {
    const handleClick = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

        window.open(
            facebookUrl,
            'Compartir en Facebook',
            'width=600,height=400,scrollbars=no,toolbar=no,menubar=no'
        );
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center bg-blue-600 hover:bg-blue-700 cursor-pointer p-2 rounded-full"
        >
            <img src='/facebook-svgrepo-com.svg' className="w-5"/>
        </button>
    );
}
