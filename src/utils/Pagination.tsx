import React, { useState, useEffect } from "react";

interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  limit,
  totalPage,
  onPageChange,
  onLimitChange,
}) => {
  const [currentLimit, setCurrentLimit] = useState(limit);

  useEffect(() => {
    setCurrentLimit(limit);
  }, [limit]);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(e.target.value, 10);
    setCurrentLimit(newLimit);
    onLimitChange(newLimit);
    // Reset page to 1 when limit changes
    onPageChange(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPage) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex flex-col items-center my-5">
      <div className="flex items-center mb-3">
        <span className="mr-2">Items per page:</span>
        <select
          value={currentLimit}
          onChange={handleLimitChange}
          className="px-2 py-1 border border-gray-300 rounded"
        >
          {[5, 10, 25, 50].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <button
          className="px-3 py-1 mx-1 bg-gray-200 rounded"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>

        {Array.from({ length: totalPage }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-3 py-1 mx-1 rounded ${
              pageNumber === page
                ? "bg-primary text-white font-bold"
                : "bg-gray-200"
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className="px-3 py-1 mx-1 bg-gray-200 rounded"
          disabled={page === totalPage}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
