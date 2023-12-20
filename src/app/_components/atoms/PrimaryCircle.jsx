//Membuat Primary Circle untuk Tiap Icon
const primary = (props) => {
  const { children, className } = props;

  return (
    <button
      className={`flex rounded-full transition-transform justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
};

export default primary;
