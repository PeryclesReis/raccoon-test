import React from "react";
import "../styles/header.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="header-main">
      <div className="itens">
        <Logo />
        <div className="links">
          <h5>Produtos</h5>
          <h5>Sobre nos</h5>
          <h5>Login</h5>
        </div>
      </div>
    </div>
  );
}
