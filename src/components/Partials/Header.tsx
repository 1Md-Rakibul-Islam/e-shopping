const Header = () => {
  return (
    <header
      className="glass-panel"
      style={{ padding: "2rem", marginBottom: "2rem" }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        Premium Products
      </h1>
      <p style={{ color: "var(--text-muted)" }}>
        Browse our collection. Handling the flaky API gracefully is part of the
        challenge.
      </p>
    </header>
  );
};

export default Header;
