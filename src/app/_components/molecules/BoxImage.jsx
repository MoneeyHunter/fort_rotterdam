const Box = ({ children }) => {
  return (
    <main className="relative flex ">
      <section className="w-[400px] h-[300px] border-0 -z-10">
        <div className="absolute h-full left-[0%] border border-slate-100"></div>
      </section>
      {children}
    </main>
  );
};
export default Box;
