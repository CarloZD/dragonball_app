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

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, page + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 gap-3">
      <div className="d-flex gap-2 align-items-center">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="btn btn-outline-primary"
        >
          ← Anterior
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`btn ${
              num === page ? "btn-primary" : "btn-outline-secondary"
            }`}
          >
            {num}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="btn btn-outline-primary"
        >
          Siguiente →
        </button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <label htmlFor="limit" className="mb-0">
          Items por página:
        </label>
        <select
          id="limit"
          value={limit}
          onChange={handleLimitChange}
          className="form-select"
          style={{ width: "auto" }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <p className="mb-0 text-muted">
        Página {page} de {totalPages}
      </p>
    </div>
  );
};

export default Pagination;