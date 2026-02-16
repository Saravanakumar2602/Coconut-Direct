const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
    >
      {children}
    </button>
  );
};

export default Button;
