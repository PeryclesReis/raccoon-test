import React from "react";
import Header from "../components/Header";
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-main">
      <Header />
      <figure id="container">
        <img src="https://cdn.wizard.com.br/wp-content/uploads/2020/05/06155457/PJ-ou-CLT-qual-o-melhor-regime-de-trabalho.jpg" alt="logo" />
        <h1 className="home-title">Lorem ipsum</h1>
        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</figcaption>
        <button className="home-btn">Lorem ipsum</button>
      </figure>
    </div>
  );
}