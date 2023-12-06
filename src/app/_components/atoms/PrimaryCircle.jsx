//Membuat Primary Circle untuk Tiap Icon
const primary = (props) => {
  const { fullWidth = false, children, bgColor } = props;
  const width = fullWidth ? "w-full" : "w-fit";
  return (
    <button
      className={`flex rounded-full p-5 ${width} ${bgColor} transition-transform scale-[.65] md:scale-75 lg:scale-100 `}
    >
      {children}
    </button>
  );
};

export default primary;
