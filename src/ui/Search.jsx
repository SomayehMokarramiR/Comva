function Search() {
  return (
    <div className="relative flex h-[48px] w-[366px] items-center gap-4 rounded-[8px] border-1 border-[#CBCBCB] bg-white px-4">
      <img
        alt="searchIcon"
        src="/src/assets/image/search-normal.png"
        className="bg-#74787C flex h-4 w-4 items-center"
      />
      <input
        type="text"
        placeholder="جستجو محصول مورد نظر..."
        className="w-full text-[#CBCBCB] placeholder-[#CBCBCB] outline-none"
      />
    </div>
  );
}

export default Search;
