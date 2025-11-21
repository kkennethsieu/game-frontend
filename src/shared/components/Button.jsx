function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold px-5 py-2 rounded-xl transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
