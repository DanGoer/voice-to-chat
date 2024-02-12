function Alert({ text, onClose }) {
  return (
    <div>
      <button onClick={() => onClose("")}>X</button>
      {text}
    </div>
  );
}

export default Alert;
