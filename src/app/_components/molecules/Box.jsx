const Box = () => {
  return (
    <main className="flex">
      <section className="relative w-[350px] h-[230px] rounded-[20px] border border-stone-300"> 
        <div className="absolute w-0 h-[230px] border border-stone-300 left-14 overflow-x-hidden"></div>
        <div className="absolute w-[349px] h-0 border border-stone-300 top-14 overflow-hidden"></div>
        <div className="absolute w-[290px] h-[50px] border rounded-[20px] bg-slate-100 top-8 left-10"></div>
      </section>
    </main>
  )
} 
export default Box;
