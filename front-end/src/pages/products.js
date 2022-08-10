import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import { apiProducts } from "../services/Api";

export default function Products() {
  const [products, setProducts] = useState([]);

  const api = async () => {
    const test = await apiProducts();
    setProducts(test.products);
  }

  useEffect(() => {
    api();
  }, []);

  if (products.length === 0) return (<h1>Carregando...</h1>);

  return (
    <div className="home-main">
      <Header />
      <Cards props={products} />
    </div>
  );
}