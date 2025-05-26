function Button({
  children,
  bgcolor = "#FE3E01",
  border = "#CBCBCB",
  textcolor = "#CBCBCB",
}) {
  return (
    <button
      style={{
        backgroundColor: bgcolor,
        borderColor: border,
        color: textcolor,
        borderStyle: "solid",
        borderWidth: "1px",
      }}
      className="text-[${textcolor}] rounded-full px-2 py-1 text-[14px] font-[300px] outline-2 transition-all hover:cursor-pointer hover:px-3 hover:py-2"
    >
      {children}
    </button>
  );
}

export default Button;
