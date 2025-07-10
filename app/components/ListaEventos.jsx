"use client";
import { useState, useEffect } from "react";
import CardAgenda from "./CardAgenda";

export default function ListaEventos({ provincia }) {
  const [eventos, setEventos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const limit = 10; // cantidad por página
  const [hasMore, setHasMore] = useState(true); // para saber si quedan más eventos

  useEffect(() => {
    cargarEventos(page);
  }, [page]);

  const cargarEventos = async (pageNumber) => {
  if (loading) return; // evitar llamadas dobles
  try {
    setLoading(true);

    let url = "";
    if (provincia !== "") {
      // Des-slugear: "san-luis" → "San Luis"
      const nombreProvincia = provincia
        .split('-')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)) // Capitalizar cada palabra
        .join(' ');
      
      url = `https://terraviva-api-new.vercel.app/api/eventos/${encodeURIComponent(nombreProvincia)}/${limit}/${pageNumber}`;
    } else {
      url = `https://terraviva-api-new.vercel.app/api/eventos/${limit}/${pageNumber}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    const nuevosEventos = data.docs || data.eventos?.docs || [];

    // Si no vienen nuevos eventos, no hay más para cargar
    if (nuevosEventos.length === 0) {
      setHasMore(false);
      return;
    }

    setEventos((prev) => {
      const todos = [...prev, ...nuevosEventos];
      const unicos = Array.from(new Map(todos.map(item => [item._id, item])).values());
      return unicos;
    });
  } catch (error) {
    console.error("Error cargando eventos:", error);
  } finally {
    setLoading(false);
  }
};

  // Detectar scroll para hacer carga automática
  useEffect(() => {
    const handleScroll = () => {
      // Distancia desde la parte superior + alto ventana
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Si estamos a menos de 100px del final y no está cargando y hay más páginas
      if (scrollTop + windowHeight >= fullHeight - 900 && !loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <>
      <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {eventos.map((n) => (
          <CardAgenda key={n._id} evento={n} />
        ))}
      </div>
      <div className="text-center mt-4">
        {/* Opcional: mostrar un texto o spinner cuando carga */}
        {loading && <p>Cargando...</p>}
        {/* Opcional: mensaje cuando no quedan más */}
        {!hasMore && <p>No hay más eventos para cargar.</p>}
      </div>
    </>
  );
}
