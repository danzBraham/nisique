import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-2 font-mono text-slate-gray lg:max-w-xl">
          Embark on a journey of unrivaled quality and style with our coveted
          collection. Dive into a realm where comfort, artistry, and exceptional
          value unite
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
