function H1({ children, size = "24", sizemd = "32" }) {
  return (
    <h1
      className={`text-[${size}px] md:text-[${sizemd}px] mt-[53px] leading-[140%] font-bold text-[#171F26]`}
    >
      {children}
    </h1>
  );
}

export default H1;
