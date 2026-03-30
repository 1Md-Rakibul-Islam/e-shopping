import { Search } from "lucide-react";
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
}: SearchBarProps) => {
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
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
