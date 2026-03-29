import { Loader2 } from "lucide-react";

const ProductsSection = () => {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem",
          border: "1px dashed var(--border)",
          borderRadius: "16px",
        }}
      >
        <Loader2
          size={40}
          color="var(--primary)"
          className="spin"
          style={{
            marginBottom: "1rem",
            animation: "spin 2s linear infinite",
          }}
        />
        <style>
          {`
               @keyframes spin {
                 100% { transform: rotate(360deg); }
               }
             `}
        </style>
      </div>
    </section>
  );
};

export default ProductsSection;
