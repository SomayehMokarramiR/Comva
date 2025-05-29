import ContactItem from "./ContactItem";
const dataContact = [
  {
    bgColor: "#FFEEF1",
    color: "#EC335A",
    title: "پیج اینستاگرام",
    text: "@shop-test11111",
    icon: "/src/assets/image/instagram1.png",
  },
  {
    bgColor: "#F3FDFA",
    color: "#00966D",
    title: "واتساپ",
    text: "09381351212",
    icon: "/src/assets/image/whatsapp1.png",
  },
  {
    bgColor: "#DFEFFF",
    color: "#0182FE",
    title: "تلگرام",
    text: "@shop-telegram",
    icon: "/src/assets/image/send-2.png",
  },
  {
    bgColor: "#FFE7DF",
    color: "#FE3E01",
    title: "تماس تلفنی ",
    text: "@shop-test11111",
    icon: "/src/assets/image/call.png",
  },
];
function ContactItemList() {
  return (
    <div className="flex flex-col gap-4">
      {dataContact.map((el, index) => (
        <ContactItem
          key={index}
          bgColor={el.bgColor}
          color={el.color}
          title={el.title}
          text={el.text}
          icon={el.icon}
        />
      ))}
    </div>
  );
}

export default ContactItemList;
