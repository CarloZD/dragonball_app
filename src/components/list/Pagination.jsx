import React from "react";

const Pagination = ({ page, totalPages, setPage, limit, setLimit }) => {
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
    setPage(1);
  };

  // 🔹 Genera una lista corta de páginas visibles
  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, page + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-3">
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          ← Anterior
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1 rounded-lg ${
              num === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Siguiente →
        </button>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="limit" className="text-sm text-gray-700">
          Items por página:
        </label>
        <select
          id="limit"
          value={limit}
          onChange={handleLimitChange}
          className="border rounded-lg px-2 py-1"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <p className="text-sm text-gray-600">
        Página {page} de {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
