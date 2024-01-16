//Membuat Primary Circle untuk Tiap Icon
"use client";

const primary = ({ children, className, onClick = () => {} }) => {
  return (
    <section
      className={`flex rounded-full transition-transform justify-center items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </section>
  );
};

export default primary;
