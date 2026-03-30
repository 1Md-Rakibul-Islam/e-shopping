interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
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
      {options?.map((opt, idx) => (
        <option key={idx} value={opt?.value} className="bg-[var(--surface)]">
          {opt?.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
