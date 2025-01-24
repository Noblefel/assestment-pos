import "./CardMakanan.css";

export function CardMakanan({ nama, harga, handleAddItem }) {
  const formatHarga = Intl.NumberFormat().format(harga);

  return (
    <article className="card-makanan" onClick={handleAddItem}>
      <img
        src="https://i1.theportalwiki.net/img/thumb/2/20/Image_Placeholder.png/300px-Image_Placeholder.png"
        alt={nama}
      />

      <div className="padding">
        <h1 className="nama">{nama}</h1>
        <p className="harga">Rp. {formatHarga}</p>
      </div>
    </article>
  );
}
