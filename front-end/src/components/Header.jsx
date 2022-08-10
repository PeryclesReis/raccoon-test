import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="header-main">
      <div className="itens">
        <Logo />
        <div className="links">
          <Link to='/products'>
            <h5>Produtos</h5>
          </ Link>
          <Link to='*'>
            <h5>Sobre nos</h5>
          </ Link>
          <Link to='/login'>
            <h5>Login</h5>
          </ Link>
        </div>
      </div>
    </div>
  );
}
