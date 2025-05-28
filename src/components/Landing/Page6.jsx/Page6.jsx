import Search from "../../../ui/Search";
import HeaderProduct from "./HeaderProduct";
import ProductList from "./ProductList";

function Page6() {
  return (
    <>
      <div className="relative">
        <HeaderProduct />
        <div className="pt-[195px]">
          <Search />
        </div>
        <div className="pt-[30px]">
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default Page6;
