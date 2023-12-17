const Box = ({children}) => {
  return (
    <main>
      <section className="flex relative w-[400px] h-[230px] rounded-[20px] border border-stone-300"> 
        <div className="absolute w-full top-[22%] border border-stone-300 "></div>
        <div className="absolute h-full left-[14%] border border-stone-300"></div>
        <div className="absolute w-[340px] h-[50px] border rounded-[20px] bg-slate-100 top-7 left-10"></div>
      </section>
      {children}
    </main>
  )
} 
export default Box;
