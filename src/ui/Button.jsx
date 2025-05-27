function Button({
  children,
  bgcolor = "rgb(255, 255, 255)",
  border = "#CBCBCB",
  textcolor = "#FE3E01",
}) {
  return (
    <div>
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
    </div>
  );
}

export default Button;
