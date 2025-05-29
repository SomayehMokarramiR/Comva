import HeaderProduct from "../../../ui/HeaderProduct";
import Search from "../../../ui/Search";
import AddressBox from "./AddressBox";
import ContactItemList from "./ContactItemList";

function Page7() {
  return (
    <>
      <div className="relative">
        <HeaderProduct />
        <div className="pt-[195px]">
          <Search />
        </div>
        <div className="pt-[30px]">
          {/* <div className="flex flex-col gap-4">
            <ContactItem
              bgColor="#EC335A"
              color="#FFEEF1"
              title="پیج اینستاگرام"
              text="@shop-test11111"
              icon="/src/assets/image/instagram1.png"
            />
            <ContactItem
              bgColor="#F3FDFA"
              color="#00966D"
              title="واتساپ"
              text="09381351212"
              icon="/src/assets/image/whatsapp1.png"
            />
            <ContactItem
              bgColor="#DFEFFF"
              color="#0182FE"
              title="تلگرام "
              text="@shop-telegram"
              icon="/src/assets/image/send-2.png"
            />
            <ContactItem
              bgColor="#FFE7DF"
              color="#FE3E01"
              title="تماس تلفنی "
              text="09395523261"
              icon="/src/assets/image/call.png"
            /> */}
          {/* </div> */}

          <ContactItemList />
          <div className="mt-[46px]">
            <AddressBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page7;
