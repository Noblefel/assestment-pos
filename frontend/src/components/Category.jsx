import { useState } from "react";
import "./Category.css";

const icon = {
  "Cumi & Kerang": "bakery_dining",
  Sayuran: "psychiatry",
  Minuman: "local_cafe",
  Ikan: "set_meal",
};

export function Category({ handleFilter, category }) {
  const [active, setActive] = useState(0);

  function handleActive(id) {
    setActive(id);
    handleFilter(id);
  }

  return (
    <ul className="category">
      <li
        className={active == 0 ? "active" : ""}
        onClick={() => handleActive(0)}
      >
        <i className="material-symbols-outlined">menu_book</i>
        <span>Semua</span>
      </li>

      {category.map((c) => (
        <li
          key={c.id}
          className={active == c.id ? "active" : ""}
          onClick={() => handleActive(c.id)}
        >
          <i className="material-symbols-outlined">{icon[c.category]}</i>
          <span>{c.category}</span>
        </li>
      ))}
    </ul>
  );
}
