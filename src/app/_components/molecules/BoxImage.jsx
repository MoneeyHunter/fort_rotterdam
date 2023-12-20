const Box = ({children}) => {
  return (
    <main className="relative flex">
      <section className="w-[400px] h-[382px] border-0 "> 
        <div className="absolute w-full top-[100%] border border-stone-300 "></div>
        <div className="absolute h-full left-[0%] border border-stone-300"></div>
      </section>
      {children}
    </main>
  )
} 
export default Box;