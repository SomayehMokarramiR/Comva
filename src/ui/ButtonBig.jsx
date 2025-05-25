function ButtonBig({ children, color, picture }) {
  return (
    <button
      style={{ background: color }}
      className="mt-4 rounded-4xl px-[34px] py-4 text-[14px] leading-[140%] text-white hover:cursor-pointer"
    >
      <span className="flex gap-1">
        <img src={picture} /> {children}
      </span>
    </button>
  );
}

export default ButtonBig;
