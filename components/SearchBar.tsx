"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClass }: { otherClass: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ setManufacturers, setModel }: any) => {
  const [searchManuFacturer, setSearchManuFacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManuFacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel), setManufacturers(searchManuFacturer);
  };

  // const searchParams = (model: string, manuFacturer: string) => {
  //   const searchParam = new URLSearchParams(window.location.search);

  //   if (model) {
  //     searchParam.set("model", model);
  //   } else {
  //     searchParam.delete("model");
  //   }

  //   if (manuFacturer) {
  //     searchParam.set("manuFacturer", manuFacturer);
  //   } else {
  //     searchParam.delete("manuFacturer");
  //   }

  //   const newPath = `${window.location.pathname}?${searchParam.toString()}`;

  //   router.push(newPath);
  // };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManuFacturer}
          setSelected={setSearchManuFacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4 "
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          placeholder="Tiguan"
          onChange={(e) => setSearchModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
