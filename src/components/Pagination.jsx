import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`p-1 rounded-md ${
          currentPage === 1
            ? "cursor-not-allowed text-gray-400"
            : "text-gray-700 hover:text-gray-900"
        }`}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      <span className="font-medium text-gray-700">
        {currentPage ? currentPage : 1} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`p-1 rounded-md ${
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-400"
            : "text-gray-700 hover:text-gray-900"
        }`}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>
    </div>
  );
}

export default Pagination;
