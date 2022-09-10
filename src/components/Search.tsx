import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../contexts/ResultContext";
import Links from "./Links";

const Search = () => {
  const [text, setText] = useState<string>("");
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchTerm(debounceValue);
  }, [debounceValue]);

  return (
    <div className="relative sm:ml-48 md:ml-52 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 bg-gray-200 rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Google or type a URL"
        onChange={(e) => setText(e.target.value)}
      />

      <Links />
    </div>
  );
};

export default Search;
