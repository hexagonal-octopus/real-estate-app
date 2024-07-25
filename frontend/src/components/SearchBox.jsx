import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../lib/utils";
import icon from "/search.png";
const types = ["buy", "rent"];

const initalQuery = {
  type: "buy",
  city: "",
  minPrice: 0,
  maxPrice: 0,
};

const SearchBox = () => {
  const [query, setQuery] = useState(initalQuery);
  const navigate = useNavigate();

  const typeHandle = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const changeHandle = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/posts",
      search: `?${createSearchParams(query)}`,
    });
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
        <form className="form" onSubmit={submitHandle}>
          <div className="form-group">
            <label htmlFor="city">Select City</label>
            <input
              type="text"
              onChange={changeHandle}
              name="city"
              id="city"
              value={query.city}
            />
          </div>
          <div className="form-group">
            <label htmlFor="minPrice">Minimum Price</label>
            <input
              type="text"
              onChange={changeHandle}
              name="minPrice"
              id="minPrice"
              value={query.minPrice}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxPrice">Maximum Price</label>
            <input
              type="text"
              onChange={changeHandle}
              name="maxPrice"
              id="maxPrice"
              value={query.maxPrice}
            />
          </div>
          <button type="submit">
            <img src={icon} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
