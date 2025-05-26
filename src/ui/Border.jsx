function Border({ w = "347px" }) {
  return (
    // <div className="mt-[89px] h-[8px] w-[1224px]">
    //   <img src="/src/assets/image/image 7.png" />
    // </div>
    <div className={`h-[8px] w-[${w}px]`}>
      <img src="/src/assets/image/image 7.png" />
    </div>
  );
}

export default Border;
