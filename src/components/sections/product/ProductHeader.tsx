import SearchBar from "@/components/ui/SearchBar";
import Select from "@/components/ui/Select";
import { categories } from "./product.constant";

interface ProductHeaderProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

const ProductHeader = ({
  search,
  setSearch,
  category,
  setCategory,
}: ProductHeaderProps) => {
  return (
    <div className="flex gap-4 mb-8 flex-wrap">
      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search products..."
      />
      <Select value={category} onChange={setCategory} options={categories} />
    </div>
  );
};

export default ProductHeader;
