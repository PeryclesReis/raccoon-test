import React from "react";
import "../styles/card.css";

export default function Card({ props }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.thumbnail} alt={props.id} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}