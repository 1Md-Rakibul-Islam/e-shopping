import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getPages = (): (number | "...")[] => {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-8"
      aria-label="Product pages"
    >
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        aria-label="Previous page"
        className="
      flex items-center justify-center
      w-9 h-9 rounded-lg
      border border-gray-200
      bg-white/60 backdrop-blur
      text-gray-600
      hover:bg-gray-100 hover:text-black
      disabled:opacity-40 disabled:cursor-not-allowed
      transition
    "
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {getPages().map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="px-2 text-gray-400 select-none"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            disabled={disabled}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`
          w-9 h-9 rounded-lg text-sm font-medium
          transition
          ${
            page === currentPage
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white/60 backdrop-blur border border-gray-200 text-gray-700 hover:bg-gray-100"
          }
          disabled:opacity-40 disabled:cursor-not-allowed
        `}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        aria-label="Next page"
        className="
      flex items-center justify-center
      w-9 h-9 rounded-lg
      border border-gray-200
      bg-white/60 backdrop-blur
      text-gray-600
      hover:bg-gray-100 hover:text-black
      disabled:opacity-40 disabled:cursor-not-allowed
      transition
    "
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};
