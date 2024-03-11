"use client";
import { manufacturers } from "@/constants";
import { SearchManuFacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchManufacturer = ({
  manuFacturer,
  setManuFacturer,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");
  const filterManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLocaleLowerCase()
            .replace(/\s=/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s=/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manuFacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-3">
            <Image
              src="/car-logo.svg"
              alt="logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="BMW"
            displayValue={(manuFacturer: string) => manuFacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filterManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create {query}
                </Combobox.Option>
              ) : (
                filterManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? `bg-primary-blue text-white` : `text-gray-900`
                      }`
                    }
                  >
                    {item}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
