const Button = (props) => {
  const { fullWidth = false, className, children } = props;

  const width = fullWidth ? "w-full" : "w-fit";

  return (
    <button
      className={`flex items-center rounded-[8px] text-white duration-300 p-[4px_14px] ${width} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
