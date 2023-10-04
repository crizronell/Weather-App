import React from "react";

function loading() {
  return (
    <>
      <section className="grid place-items-center  min-h-screen">
        <div className="flex items-center space-x-2">
          <div className="animate-pulse  bg-gray-500 h-12 w-12 rounded-full"></div>
          <div className="space-y-2">
            <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]"></div>
            <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default loading;
