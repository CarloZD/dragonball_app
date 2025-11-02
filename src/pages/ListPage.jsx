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
      <h2 className="text-center mb-4 fw-bold">Personajes de Dragon Ball</h2>

      <FilterBar
        search={search}
        setSearch={setSearch}
        clearFilters={clearFilters}
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorAlert message={error} />}

      <div className="row">
        {!loading &&
          entities.map((entity) => (
            <div key={entity.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <EntityCard entity={entity} />
            </div>
          ))}
      </div>

      {!loading && entities.length === 0 && (
        <div className="alert alert-info text-center">
          No se encontraron personajes.
        </div>
      )}

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