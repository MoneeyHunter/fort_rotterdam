//Membuat Primary Circle untuk Tiap Icon
const primary = (props) => {
  const { children, bgColor } = props;

  return (
    <button
      className={`flex rounded-full p-5 w-[80px] h-[80px] transition-transform justify-center items-center scale-[.65] md:scale-75 lg:scale-100  ${bgColor}`}
    >
      {children}
    </button>
  );
};

export default primary;
