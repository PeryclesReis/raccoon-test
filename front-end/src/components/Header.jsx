import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Logo from "./Logo";

export default function Header() {
  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoged(true);
  }, []);

  return (
    <div className="header-main">
      <div className="itens">
        <Logo />
        <div className="links">
          <Link to='/'>
            <h5>home</h5>
          </ Link>
          <Link to={isLoged ? '/products' : '/login'}>
            <h5>produtos</h5>
          </ Link>
          <a href="https://github.com/PeryclesReis" target="_blank" rel="noopener noreferrer">
            <h5>about</h5>
          </a>
          <Link to='/login'>
            <h5>login</h5>
          </ Link>
        </div>
      </div>
    </div>
  );
}
