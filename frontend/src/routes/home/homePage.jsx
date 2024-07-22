import React from "react";

import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-center">
          The #1 site real estate professional trust.
        </h1>
        <SearchBox />
      </div>
    </section>
  );
};

export default HomePage;
