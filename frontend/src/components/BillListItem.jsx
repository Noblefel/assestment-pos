import "./BillListItem.css";

export function BillListItem({ items }) {
  if (!items?.length) {
    return (
      <div className="empty">
        <i className="material-symbols-outlined">shopping_cart</i>
      </div>
    );
  }

  function formatHarga(item) {
    const harga = item.harga * item.quantity;
    return Intl.NumberFormat().format(harga);
  }

  return (
    <div className="table-wrap">
      <table id="print">
        <thead>
          <th>Item</th>
          <th>Jumlah</th>
          <th>Harga</th>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.nama}>
              <td className="nama">{i.nama}</td>
              <td className="quantity">x {i.quantity}</td>
              <td className="harga">Rp. {formatHarga(i)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
