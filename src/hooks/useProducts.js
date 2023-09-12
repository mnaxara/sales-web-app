import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("http://localhost:3100/products/");
      const data = await response.json();
      setProducts(data);
    };

    fetchProduct();
  }, []);

  return { products };
}
