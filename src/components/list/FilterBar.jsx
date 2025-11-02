import React from "react";

const FilterBar = ({ search, setSearch, clearFilters }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar personaje..."
        className="border rounded-lg px-3 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={clearFilters}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default FilterBar;
