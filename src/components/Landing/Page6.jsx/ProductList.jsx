import Product from "./Product";

const dataProduct = [
  {
    image: "/src/assets/image/image 15.png",
    price: "265000",
    title:
      "من هستم تایتل تستی مانیتور مخصوص بازی مدل سامسونگ LF27T350FH-M 27 اینچ",
  },
  {
    image: "/src/assets/image/image 15.png",
    price: "445000",
    title:
      "من هستم تایتل تستی مانیتور مخصوص بازی مدل سامسونگ LF27T350FH-M 27 اینچ",
  },
  {
    image: "/src/assets/image/image 15.png",
    price: "26665000",
    title:
      "من هستم تایتل تستی مانیتور مخصوص بازی مدل سامسونگ LF27T350FH-M 27 اینچ",
  },
  {
    image: "/src/assets/image/image 15.png",
    price: "363500",
    title:
      "من هستم تایتل مانیتور مخصوص بازی مدل سامسونگ LF27T350FH-M 27 اینچ سوم",
  },
];

function ProductList() {
  return (
    <div className="flex flex-col gap-4">
      {dataProduct.map((item) => (
        <Product
          key={item.title}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
