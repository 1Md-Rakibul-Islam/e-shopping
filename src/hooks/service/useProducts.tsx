import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";

export const useProducts = (params: {
  page: number;
  search: string;
  category: string;
}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => api.fetchProducts(params),
  });
};
