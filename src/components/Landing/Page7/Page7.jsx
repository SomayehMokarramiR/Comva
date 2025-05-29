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
