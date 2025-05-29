function ContactItem({ bgColor, icon, title, text, color }) {
  return (
    <div
      style={{ borderColor: color, backgroundColor: bgColor, color: color }}
      className={`flex h-[48px] w-[366px] items-center justify-between gap-2 rounded-[8px] border-1 p-4 text-[16px] leading-[180%] font-normal capitalize`}
    >
      <div className="flex gap-4">
        <img src={icon} />
        <p className="">{title}</p>
      </div>
      <div className="text-end">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ContactItem;
