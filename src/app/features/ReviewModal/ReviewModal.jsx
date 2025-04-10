import { useState } from "react";
import css from "./ReviewModal.module.css";

export default function ReviewModal({
  isOpen,
  isLoading,
  onClose,
  onSubmit,
  setIsModalOpen,
  modalContent,
  isSuccess,
}) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    const formData = { name, text, role, phone, email };
    onSubmit(formData);
    setName("");
    setText("");
    setRole("");
    setPhone("");
    setEmail("");
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              type="text"
              className={css.input}
              placeholder="Ім`я"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              className={css.input}
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              className={css.input}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              className={css.input}
              placeholder="Позиція"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <textarea
              className={css.textarea}
              placeholder="Ваш відгук"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className={css.submitBtn} onClick={handleSubmit}>
              Надіслати
            </button>
          </>
        )}
        {isSuccess && (
          <button className={css.closeBtn} onClick={closeModal}>
            Закрити
          </button>
        )}
      </div>
    </div>
  );
}
