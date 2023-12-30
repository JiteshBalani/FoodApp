const SearchBar = () => {
  return (
    <div
    className="flex items-center space-x-3"
    >
        <input className="border-2 border-[#F05455] rounded-3xl p-2 px-4"
        placeholder="Type Restaurant Name"
        ></input>
        <button
        className="rounded-3xl border-2 border-[#F05455] text-[#F05455] p-2 px-4 font-semibold"
        >Search</button>
    </div>
  )
}

export default SearchBar