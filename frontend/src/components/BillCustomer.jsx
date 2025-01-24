import "./BillCustomer.css";

export function BillCustomer() {
  return (
    <div className="costumer">
      <div className="with-icon">
        <i className="material-symbols-outlined">account_circle</i>
        <span>Customer</span>
      </div>
      <p>New Costumer</p>
      <div className="with-icon">
        <i className="material-symbols-outlined">format_list_bulleted</i>
        <span>Billing list</span>
      </div>
    </div>
  );
}
