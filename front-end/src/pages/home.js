import React, { useEffect } from "react";
import Header from "../components/Header";
import { apiProducts } from "../services/Api";
import '../styles/home.css';

export default function Home() {

  const api = async () => {
    const test = await apiProducts();
    console.log(test);
  }

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="home-main">
      <Header />
      <h1>Home</h1>
    </div>
  );
}