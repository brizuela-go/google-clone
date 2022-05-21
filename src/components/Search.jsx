import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { MDBInput } from "mdb-react-ui-kit";

import { useResultContext } from "../context/ResultContextProvider";
import Links from "./Links";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  console.log(debouncedValue);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-m-10 mt-3">
      <MDBInput
        value={text}
        label="Search "
        id="typeText"
        type="text"
        onChange={(e) => setText(e.target.value)}
        size="lg"
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
