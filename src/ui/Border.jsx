function Border({ w = "347px" }) {
  return (
    // <div className="mt-[89px] h-[8px] w-[1224px]">
    //   <img src="/src/assets/image/image 7.png" />
    // </div>
    <div className={`mt-0 h-[8px] md:mt-[89px] w-[${w}px] md:w-[1224px]`}>
      <img src="/src/assets/image/image 7.png" />
    </div>
  );
}

export default Border;
