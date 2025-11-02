import React from "react";

const FilterBar = ({ search, setSearch, clearFilters }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar personaje..."
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <button
          onClick={clearFilters}
          className="btn btn-secondary w-100"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};

export default FilterBar;