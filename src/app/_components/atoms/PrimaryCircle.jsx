//Membuat Primary Circle untuk Tiap Icon
"use client";

const primary = (props) => {
  const { children, className, onClick } = props;

  return (
    <button
      className={`flex rounded-full transition-transform justify-center items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

primary.defaultProps = {
  onClick: () => {},
};

export default primary;
