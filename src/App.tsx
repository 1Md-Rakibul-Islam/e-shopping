import { Search } from "lucide-react";
import ProductsSection from "./components/sections/product/ProductsSection";
import Header from "./components/Partials/Header";
// import { api } from './services/api';
// Use this to fetch data: api.fetchProducts(...)

function App() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      {/* Header Section */}
      <Header />

      {/* Controls Section */}
      <section style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
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

        <select
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
          <option value="" style={{ background: "var(--surface)" }}>
            All Categories
          </option>
          <option value="electronics" style={{ background: "var(--surface)" }}>
            Electronics
          </option>
          <option value="clothing" style={{ background: "var(--surface)" }}>
            Clothing
          </option>
          <option value="home" style={{ background: "var(--surface)" }}>
            Home
          </option>
          <option value="outdoors" style={{ background: "var(--surface)" }}>
            Outdoors
          </option>
        </select>
      </section>

      {/* Main Grid Placeholder */}
      <main className="min-h-screen">
        <ProductsSection />
      </main>
    </div>
  );
}

export default App;
