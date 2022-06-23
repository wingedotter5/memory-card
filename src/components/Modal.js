import { useState } from "react";
import classes from "../styles/Modal.module.css";

export default function Modal({ defaultOpen, onClose, children, title }) {
  const [open, setOpen] = useState(defaultOpen);

  const closeModal = () => {
    setOpen(false);
    onClose();
  };

  return (
    <>
      {open && (
        <div className={classes.container}>
          <div className={classes.content}>
            {children}
            <button onClick={closeModal}>{title}</button>
          </div>
        </div>
      )}
    </>
  );
}
