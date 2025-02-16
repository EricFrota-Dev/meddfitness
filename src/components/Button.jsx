const Button = ({ children, tipodeBtn }) => {
  const modelos = {
    cancelar: "bg-red-600",
    confirmar: "bg-green-600",
    padrao: "bg-gray-500",
  };
  return <button className={modelos[tipodeBtn]}>{children}</button>;
};

export default Button;

