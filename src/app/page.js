"use client";

import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // გამოვიყენე dummyjson რადგან fakestoreapi არ მუშაობდა
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Loading და Error შეტყობინება
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}