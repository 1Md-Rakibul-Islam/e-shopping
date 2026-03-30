import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import CardSkeleton from "@/components/shared/CardSkeleton";
import ProductHeader from "./ProductHeader";
import ProductCard from "./ProductCard";
import { Pagination } from "@/components/ui/Pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/service/useProducts";
import { api } from "@/services/api";

const ProductsSection = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isError, error, isFetching } = useProducts({
    page,
    search: debouncedSearch,
    category,
  });

  useEffect(() => {
    if (!data) return;

    // Prefetch next page
    if (data?.page < data?.totalPages) {
      queryClient.prefetchQuery({
        queryKey: [
          "products",
          {
            page: page + 1,
            search: debouncedSearch,
            category,
          },
        ],
        queryFn: () =>
          api?.fetchProducts({
            page: page + 1,
            search: debouncedSearch,
            category,
          }),
      });
    }
  }, [data, page, debouncedSearch, category, queryClient]);

  // Reset page when filter changes
  const handleSearchChange = (value: string) => {
    setPage(1);
    setSearch(value);
  };

  const handleCategoryChange = (value: string) => {
    setPage(1);
    setCategory(value);
  };

  return (
    <section>
      <ProductHeader
        search={search}
        setSearch={handleSearchChange}
        category={category}
        setCategory={handleCategoryChange}
      />
      <div className="mx-auto">
        {/* Error */}

        {isError && (
          <div className="text-lg sm:text-xl md:text-2xl text-center text-red-500 mb-5">
            {(error as Error)?.message}
          </div>
        )}

        {/* Empty */}
        {!isLoading && data?.data?.length === 0 && (
          <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-400 mb-5">
            No products found
          </p>
        )}

        <div className="border border-dashed rounded-2xl min-h-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {
              // Skeleton
              isLoading &&
                Array.from({ length: 12 }, (_, i) => <CardSkeleton key={i} />)
            }
            {data?.data?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>

        {data && (
          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={data?.page}
              totalPages={data?.totalPages}
              onPageChange={(newPage) => {
                if (newPage !== page) setPage(newPage);
              }}
              disabled={isFetching} // prevent spam click during fetch
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
