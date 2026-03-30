import Header from "../partials/Header";
import ProductsSection from "../sections/product/ProductsSection";

const HomePage = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <ProductsSection />
      </main>
    </>
  );
};

export default HomePage;
