//Membuat Primary Circle untuk Tiap Icon
"use client";

const primary = ({ children, className, onClick = () => {} }) => {
  return (
    <button
      className={`flex rounded-full transition-transform justify-center items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default primary;
