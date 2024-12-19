
import { useState } from "react";

const Searchbar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTag, setSearchTag] = useState("")

  const handleSearch = () => {
    
  };

  return (
    <>
      <div className="w-full max-w-xs space-y-1.5 mx-auto p-3 shadow mb-3 bg-white shadow-black rounded-md text-black text-xs">
        <div>
          <input
            type="search"
            placeholder="Search Memories"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="search"
            placeholder="Search Tags"
            value={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 w-full rounded-lg transition"
        >
          SEARCH
        </button>
      </div>
    </>
  );
};

export default Searchbar;
