"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
    router.push(`/location/${query}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative mx-auto  w-fit">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" rounded-3xl p-2.5 mt-2 focus:outline-none w-80 md:w-96 block mx-auto   "
            placeholder="Search Location..."
          />
          <div className="flex absolute inset-y-0 right-5 items-center ">
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
