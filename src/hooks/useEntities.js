import { useEffect, useState } from "react";
import { getCharacters } from "../services/entityService";

export const useEntities = () => {
  const [entities, setEntities] = useState([]);     // Lista de personajes
  const [loading, setLoading] = useState(false);     // Estado de carga
  const [error, setError] = useState(null);          // Errores de la API

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const fetchEntities = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getCharacters(page, limit, search);

      setEntities(data.items || data.characters || data); 
      if (data.meta?.totalPages) setTotalPages(data.meta.totalPages);
      else setTotalPages(10); // valor por defecto si la API no lo da
    } catch (err) {
      setError("No se pudieron cargar los personajes.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, [page, limit, search]);

  const clearFilters = () => {
    setSearch("");
    setPage(1);
    setLimit(10);
  };

  return {
    entities,
    loading,
    error,
    page,
    limit,
    search,
    totalPages,
    setPage,
    setLimit,
    setSearch,
    clearFilters,
  };
};
