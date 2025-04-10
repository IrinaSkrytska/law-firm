import { useState } from "react";
import css from "./Modal.module.css";

export default function Modal({
  isOpen,
  isLoading,
  onClose,
  onSubmit,
  modalContent,
  isSuccess,
}) {
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <button className={css.closeIcon} onClick={onClose}>
          ×
        </button>
        <p className={css.statusMessage}>{modalContent}</p>

        {!isLoading && !isSuccess && (
          <>
            <input
              type="tel"
              className={css.input}
              placeholder="+380XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button
              className={css.submitBtn}
              onClick={() => {
                onSubmit(phone);
                setPhone("");
              }}
            >
              Надіслати
            </button>
          </>
        )}
      </div>
    </div>
  );
}
