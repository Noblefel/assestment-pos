import "./Dialog.css";

export function Dialog({ open, setOpen, children }) {
  function close() {
    setOpen(false);
  }

  return (
    <>
      <dialog open={open}>
        <i className="material-symbols-outlined close" onClick={close}>
          cancel
        </i>

        {children}
      </dialog>

      <div
        className={"overlay" + (open ? " active" : "")}
        onClick={close}
      ></div>
    </>
  );
}
