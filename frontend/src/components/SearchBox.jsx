import React, { useState } from "react";
import { capitalizeFirstLetter } from "../lib/utils";
const types = ["buy", "rent"];

const initalQuery = {
  type: "buy",
  city: "",
  minPrice: 0,
  maxPrice: 0,
};

const SearchBox = () => {
  const [query, setQuery] = useState(initalQuery);

  const typeHandle = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className="searchbox">
      <div className="top">
        {types &&
          types.map((type) => (
            <button onClick={() => typeHandle(type)}>
              {capitalizeFirstLetter(type)}
            </button>
          ))}
      </div>
      <div className="bottom">
        <form onSubmit={submitHandle}></form>
      </div>
    </div>
  );
};

export default SearchBox;
