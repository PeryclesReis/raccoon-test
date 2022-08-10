import React from "react";
import Card from "./Card";
import "../styles/cards.css";

export default function Cards({ props }) {
  return (
    <div className="cards">
      {
        props.map(card => <Card props={card} />)
      }
    </div>
  );
}
