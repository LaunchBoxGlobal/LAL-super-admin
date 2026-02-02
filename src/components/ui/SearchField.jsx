const SearchField = () => {
  return (
    <div className="w-full md:max-w-[252px] h-[41px] bg-white custom-shadow flex items-center justify-between gap-2 px-4 rounded-[12px]">
      <img src="/search-icon.png" alt="search icon" width={14} height={14} />
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full outline-none bg-transparent text-sm text-[var(--secondary-text)]"
      />
    </div>
  );
};

export default SearchField;
