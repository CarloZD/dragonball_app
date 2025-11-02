import React from "react";
import { useEntities } from "../hooks/useEntities";
import EntityCard from "../components/list/EntityCard";
import FilterBar from "../components/list/FilterBar";
import Pagination from "../components/list/Pagination";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorAlert from "../components/common/ErrorAlert";

const ListPage = () => {
  const {
    entities,
    loading,
    error,
    page,
    limit,
    totalPages,
    setPage,
    setLimit,
    search,
    setSearch,
    clearFilters,
  } = useEntities();

  return (
    <div className="container py-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Personajes de Dragon Ball</h2>

      <FilterBar
        search={search}
        setSearch={setSearch}
        clearFilters={clearFilters}
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorAlert message={error} />}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {!loading &&
          entities.map((entity) => (
            <EntityCard key={entity.id} entity={entity} />
          ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
      />
    </div>
  );
};

export default ListPage;
