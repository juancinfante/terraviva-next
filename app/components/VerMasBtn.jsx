import Link from "next/link"

const VerMasBtn = ({ pagina }) => {
    return (
        <div className="text-center mt-4 sm:col-span-2 lg:col-span-3 mb-5">
            <Link href={`/${pagina}`} className="text-white px-2 py-1 rounded hover:bg-red-700 transition cursor-pointer hover:underline" style={{
                background: 'linear-gradient(285deg, #f92a28 27%, #da1752 100%, #fff 100%)',
            }}>Ver más</Link>
        </div>
    )
}

export default VerMasBtn