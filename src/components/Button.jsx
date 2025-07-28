function Button({ label }) {
  function handleClick() {
    alert(`A label desse botão é ${label}`);
  }

  return (
    <button onClick={handleClick} style={{ padding: '10px', margin: '10px' }}>
      {label}
    </button>
  );
}

export default Button;
