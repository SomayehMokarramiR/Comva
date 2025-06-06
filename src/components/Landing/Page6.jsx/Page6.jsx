import HeaderProduct from "../../../ui/HeaderProduct";
import Search from "../../../ui/Search";
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
