function H1({ children, size = "32px" }) {
  return (
    <h1
      className={`text-[${size}px] mt-[53px] leading-[140%] font-bold text-[#171F26]`}
    >
      {children}
    </h1>
  );
}

export default H1;
