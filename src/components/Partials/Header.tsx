const Header = () => {
  return (
    <header
      className="glass-panel"
      style={{ padding: "2rem", marginBottom: "2rem" }}
    >
      <h1 className="font-semibold mb-2">Premium Products</h1>
      <p className="text-[var(--text-muted)]">
        Browse our collection. Handling the flaky API gracefully is part of the
        challenge.
      </p>
    </header>
  );
};

export default Header;
