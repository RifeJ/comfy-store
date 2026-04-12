import React from "react";

function PaginationContainer({ meta, filters, setFilters }) {
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  if (pageCount < 2) return null;

  return (
    <div className="flex justify-end mt-16">
      <div className="join">
        <button></button>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() =>
              setFilters((prev) => ({ ...prev, page: pageNumber }))
            }
            className={`btn btn-xs sm:btn-md border-none join-item ${
              pageNumber === page ? "bg-base-300 border-base-300" : ""
            }`}>
            {pageNumber}
          </button>
        ))}
        <button></button>
      </div>
    </div>
  );
}

export default PaginationContainer;
