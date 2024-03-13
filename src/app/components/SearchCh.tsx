"use client";
import React, { ChangeEvent, useState } from "react";

const SearchCh = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  return (
    <>
      <input
        placeholder="search for any character"
        type="text"
        onChange={handleChange}
        value={searchInput}
      />
    </>
  );
};

export default SearchCh;
