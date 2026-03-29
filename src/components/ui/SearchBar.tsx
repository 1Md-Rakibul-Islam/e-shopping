import { Search } from "lucide-react";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
