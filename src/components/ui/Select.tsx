const Select = () => {
  return (
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
  );
};

export default Select;
