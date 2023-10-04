import React from "react";
import Link from "next/link";
function NoLocationFound() {
  return (
    <div className="  w-full min-h-[50rem] flex flex-col justify-center items-center ">
      <h1 className="text-9xl font-extrabold text-white tracking-widest animate-pulse">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Location Not Found
      </div>

      <Link
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150"
        href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"></path>
        </svg>
        <span>Return Home</span>
      </Link>
    </div>
  );
}

export default NoLocationFound;
