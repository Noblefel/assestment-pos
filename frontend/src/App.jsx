import "./App.css";
import { CardMakanan } from "./components/CardMakanan";
import { Category } from "./components/Category";
import { Bill } from "./components/Bill";
import { useEffect, useReducer, useState } from "react";
import { itemReducer } from "./reducer/itemReducer.js";

function App() {
  const [items, dispatch] = useReducer(itemReducer, []);
  const [category, setCategory] = useState([]);
  const [makanan, setMakanan] = useState([]);
  const [filtered, setFiltered] = useState(makanan);

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setStatus("loading");

    try {
      let resp = await fetch("http://localhost:8001/api/makanan");
      let json = await resp.json();
      setMakanan(json.data);
      setFiltered(json.data);

      resp = await fetch("http://localhost:8001/api/category");
      json = await resp.json();
      setCategory(json.data);
      setStatus("success");
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }

  if (status == "loading") {
    return (
      <div className="layout">
        <div className="grid-makanan">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
        <div className="grid-bill skeleton"></div>
      </div>
    );
  }

  if (status == "error") {
    return <h1>Maaf, sepertinya ada kesalahan</h1>;
  }

  function handleAddItem(item) {
    dispatch({ type: "add", item: item });
  }

  function handleResetItem() {
    dispatch({ type: "reset" });
  }

  function handleFilter(categoryId) {
    if (!categoryId) {
      setFiltered(makanan);
      return;
    }

    setFiltered(
      makanan.filter((m) => {
        return m.category_id == categoryId;
      })
    );
  }

  return (
    <div className="layout">
      <div className="grid-makanan">
        {filtered.map((m) => (
          <CardMakanan
            key={m.nama}
            nama={m.nama}
            harga={m.harga}
            handleAddItem={() => handleAddItem(m)}
          />
        ))}
      </div>
      <div className="grid-bill">
        <Category handleFilter={handleFilter} category={category} />

        <Bill items={items} handleResetItem={handleResetItem} />
      </div>
    </div>
  );
}

export default App;
