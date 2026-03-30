import { Search } from "lucide-react";
import { categories } from "./product.constant";

interface ProductHeaderProps {
  search: string;
  setSearch: (search: string) => void;
  category: string;
  setCategory: (category: string) => void;
}

const ProductHeader = ({
  search,
  setSearch,
  category,
  setCategory,
}: ProductHeaderProps) => {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
      <div
        className="glass-panel"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0.75rem 1rem",
          flex: 1,
          maxWidth: "400px",
        }}
      >
        <Search
          size={20}
          color="var(--text-muted)"
          style={{ marginRight: "0.75rem" }}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-main)",
            outline: "none",
            width: "100%",
            fontSize: "1rem",
          }}
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="glass-panel"
        style={{
          padding: "0.75rem 1rem",
          color: "var(--text-main)",
          outline: "none",
          fontSize: "1rem",
          cursor: "pointer",
          appearance: "none",
        }}
      >
        {categories?.map((category, idx) => (
          <option
            key={idx}
            value={category?.value}
            style={{ background: "var(--surface)" }}
          >
            {category?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductHeader;
