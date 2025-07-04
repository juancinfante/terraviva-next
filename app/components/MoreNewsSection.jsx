import SmallNewsCard from "./SmallNewsCard";

export default function MoreNewsSection() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Grid principal de 9 noticias */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Reemplazá por tus datos reales */}
                <SmallNewsCard title="Añatuya celebrará su cumpleaños..." province="Santiago del Estero" image="https://picsum.photos/id/1011/400/250" />
                <SmallNewsCard title="La Peña Mishky debuta..." province="Córdoba" image="https://picsum.photos/id/1012/400/250" />
                <SmallNewsCard title="Vuelve la feria Caminos y Sabores..." province="Capital Federal" image="https://picsum.photos/id/1013/400/250" />
                <SmallNewsCard title="Calígula, el clásico musical..." province="Santiago del Estero" image="https://picsum.photos/id/1014/400/250" />
                <SmallNewsCard title="Pre Cosquín 2026 ya está en marcha..." province="Córdoba" image="https://picsum.photos/id/1015/400/250" />
                <SmallNewsCard title="La Feria Artesanal de Santiago..." province="Santiago del Estero" image="https://picsum.photos/id/1016/400/250" />
                <SmallNewsCard title="Quimilí celebra su 121° aniversario..." province="Santiago del Estero" image="https://picsum.photos/id/1017/400/250" />
                <SmallNewsCard title="Grandes artistas populares..." province="Tucumán" image="https://picsum.photos/id/1018/400/250" />
                <SmallNewsCard title="Este viernes se hará en Santiago..." province="Santiago del Estero" image="https://picsum.photos/id/1019/400/250" />
            </div>

            {/* Aside derecho para publicidad + redes */}
            <aside className="flex flex-col gap-4">
                <div className="bg-gray-100 rounded overflow-hidden">
                    <img src="/publicidad.jpg" alt="Publicidad" className="w-full" />
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h4 className="font-semibold mb-2">Redes</h4>
                    <ul className="flex flex-col gap-2">
                        <li className="flex justify-between bg-blue-600 text-white px-2 py-1 rounded">Facebook <span>+242mil</span></li>
                        <li className="flex justify-between bg-black text-white px-2 py-1 rounded">X <span>+1800</span></li>
                        <li className="flex justify-between bg-red-600 text-white px-2 py-1 rounded">YouTube <span>+1000</span></li>
                        <li className="flex justify-between bg-red-700 text-white px-2 py-1 rounded">Instagram <span>+36mil</span></li>
                    </ul>
                </div>
            </aside>
            <div className="text-center mt-4">
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">Ver más noticias</button>
            </div>
        </div>
    );
}
