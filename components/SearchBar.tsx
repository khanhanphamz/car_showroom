"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
