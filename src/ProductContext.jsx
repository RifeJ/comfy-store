import { createContext, useContext, useState, useEffect } from "react";

// 1. Создаем сам контекст
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Тут твой fetch...
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://strapi-store-server.onrender.com/api/products?featured=true",
        );
        const data = await res.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

// 2. ВОТ ЭТОГО СКОРЕЕ ВСЕГО НЕ ХВАТАЕТ!
// Экспортируем кастомный хук
export const useProductContext = () => {
  return useContext(ProductContext);
};
