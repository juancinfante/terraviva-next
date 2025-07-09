// import AsidePub from "../../components/AsidePub";
// import Title from "../../components/Title";
// import ListaGaleria from "../../components/ListaGaleria";

// export default async function Page() {
//     return (
//         <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
//             <div className="md:col-span-3">
//                 <Title title="Galerías" />
//                 <div className="grid grid-cols-1 gap-4">
//                    <ListaGaleria />
//                 </div>
//             </div>
//             <AsidePub />
//         </div>
//     );
// }

import AsidePub from "../../components/AsidePub";
import ListaGaleria from "../../components/ListaGaleria";
import Title from "../../components/Title";

export default async function GaleriasPage() {
  const limit = 20;
  const page = 1;

  // Traemos la primera página SSR
  const res = await fetch(`https://terraviva-api-new.vercel.app/api/albums/${limit}/${page}`, { cache: 'no-store' });
  const data = await res.json();

  return (
    
    <div className="container mx-auto max-w-7xl px-4 py-6 md:grid md:grid-cols-4 gap-4">
             <div className="md:col-span-3">
                 <Title title="Galerías" />
                 <div className="grid grid-cols-1 gap-4">
                          <ListaGaleria initialData={data.albums.docs} initialHasNext={data.albums.hasNextPage} initialPage={page} limit={limit} />

                 </div>
             </div>
             <AsidePub />
         </div>
  );
}
