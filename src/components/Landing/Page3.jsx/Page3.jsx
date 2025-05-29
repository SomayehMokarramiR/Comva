import HeaderProduct from "../../../ui/HeaderProduct";
import Search from "../../../ui/Search";
import ItemList from "./ItemList";

function Page3() {
  return (
    <>
      <div className="relative">
        <HeaderProduct />
        <div className="pt-[195px]">
          <Search />
        </div>
        <div className="pt-[30px]">
          <ItemList />
        </div>
      </div>
    </>
  );
}

export default Page3;
