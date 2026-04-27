import React, { useState } from "react";
import { ProductContex2 } from "../utils/ProductContex2";
import LoadingSpiner from "../components/LoadingSpiner";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import PaginationContainer from "../components/PaginationContainer";

const initialFilters = {
  search: "",
  category: "all",
  company: "all",
  order: "a-z",
  price: 100000,
  shipping: "",
  page: "1",
};

function Products() {
  const [appliedFilters, setAppliedFilters] = useState(initialFilters);

  // Генерируем URL только для запроса
  const queryParams = new URLSearchParams(appliedFilters).toString();
  const url = `http://localhost:5000/api/products?${queryParams}`;

  // Твой кастомный хук сам сделает fetch при изменении URL
  const { data, loading, meta } = ProductContex2(url);

  const fetchProducts = (dataFromForm) => {
    // Превращаем boolean из чекбокса в "on" для твоего бэкенда
    const formattedFilters = {
      ...dataFromForm,
      shipping: dataFromForm.shipping ? "on" : "",
      page: "1",
    };
    setAppliedFilters(formattedFilters);
  };

  if (loading) return <LoadingSpiner />;

  return (
    <section className="py-20 px-8 mx-auto max-w-6xl">
      <Filters
        initialFilters={initialFilters}
        categories={meta?.categories || []}
        companies={meta?.companies || []}
        fetchProducts={fetchProducts}
        onReset={() => setAppliedFilters(initialFilters)}
      />

      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data && data.length > 0 ? (
          data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2 className="text-2xl mt-16">No products matched your search...</h2>
        )}
      </div>
      {/* <PaginationContainer
        meta={meta}
        filters={filters}
        setFilters={setFilters}
      /> */}
    </section>
  );
}

export default Products;
