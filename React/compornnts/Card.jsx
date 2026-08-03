import React from "react";

export default function Card({ image, title, desc, tags = [] }) {
  return (
    <article className="card">
      <div className="photo" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-body">
        <div className="tags">{tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </article>
  );
}