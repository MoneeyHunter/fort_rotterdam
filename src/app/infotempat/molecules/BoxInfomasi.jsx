const BoxInformasi = (props) => {
  const { children } = props;
  return (
    <>
      <section
        className={`rounded-[36px] w-[267px] h-[314px] border hover:border-primary-maroon flex justify-center p-8 transition ease-in-out duration-500 hover:shadow-2xl `}
      >
        {children}
      </section>
    </>
  );
};

export default BoxInformasi;
