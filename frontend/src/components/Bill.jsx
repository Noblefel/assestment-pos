import "./Bill.css";
import { useState } from "react";
import { Dialog } from "./Dialog";
import { BillCustomer } from "./BillCustomer";
import { BillListItem } from "./BillListItem";
import gif from "./../assets/verified.gif";

export function Bill({ items, handleResetItem }) {
  const [dialogSaved, setDialogSaved] = useState(false);
  const [dialogCharge, setDialogCharge] = useState(false);

  function toggleSaved() {
    setDialogSaved(!dialogSaved);
  }

  function toggleCharge() {
    setDialogCharge(!dialogCharge);
  }

  const total = items?.reduce((total, item) => {
    return total + item.harga * item.quantity;
  }, 0);

  const formatTotal = Intl.NumberFormat().format(total);

  const [uang, setUang] = useState(0);
  const [kembalian, setKembalian] = useState(0);

  function handleInput(e) {
    const n = Number(e.target.value);
    setUang(n);
    setKembalian(n - total);
  }

  return (
    <article className="bill">
      <BillCustomer />

      <div className="type">
        <select name="">
          <option value="dine-in">Dine in</option>
          <option value="take-out">Take out</option>
          <option value="delivery">Deliveri</option>
        </select>
      </div>

      <BillListItem items={items} />

      <div className="subtotal">
        <p>Subtotal:</p>
        <p className="harga">Rp. {formatTotal}</p>
      </div>

      <div className="total">
        <p>Total:</p>
        <p className="harga">Rp. {formatTotal}</p>
      </div>

      <button type="button" className="clear" onClick={handleResetItem}>
        Clear sale
      </button>

      <div className="flex-btn">
        <button type="button" onClick={toggleSaved}>
          <i className="material-symbols-outlined">favorite</i>
          <span>Save bill</span>
        </button>
        <button type="button" onClick={() => window.print()}>
          <i className="material-symbols-outlined">print</i>
          <span>Print bill</span>
        </button>
      </div>

      <button className="charge" onClick={toggleCharge}>
        <i className="material-symbols-outlined">shopping_cart</i>
        <span>Charge Rp. {formatTotal}</span>
      </button>

      <Dialog open={dialogSaved} setOpen={setDialogSaved}>
        <img
          src={gif}
          alt="Done animated icons created by Freepik - Flaticon"
        />

        <h4 style={{ "text-align": "center" }}>Bill berhasil disimpan</h4>

        <br />
        <button onClick={toggleSaved}>OK</button>
      </Dialog>

      <Dialog open={dialogCharge} setOpen={setDialogCharge}>
        <div className="dialog-charge">
          <p>Total</p>
          <h1>Rp. {formatTotal}</h1>

          {uang > total && total > 0 && (
            <>
              <p>Kembalian</p>
              <h2>Rp. {kembalian}</h2>
            </>
          )}

          <div className="input-group">
            <i className="material-symbols-outlined">attach_money</i>
            <input
              type="number"
              placeholder="Masukan nominal uang"
              value={uang}
              onInput={handleInput}
            />
          </div>

          <br />
          <button onClick={toggleCharge}>OK</button>
        </div>
      </Dialog>
    </article>
  );
}
