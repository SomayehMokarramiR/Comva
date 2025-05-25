function Button({ children }) {
  return (
    <button className="rounded-full px-2 py-1 text-[14px] font-[300px] text-[#FE3E01] outline-2 outline-[#CBCBCB] transition-all hover:cursor-pointer hover:px-3 hover:py-2">
      {children}
    </button>
  );
}

export default Button;
