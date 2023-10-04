import React from "react";
import icon from "@/public/weatherapi_logo.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="m-2 relative z-50  w-fit ">
        <Link href="/">
          <Image priority src={icon} alt="Icon"></Image>
        </Link>
      </div>
    </>
  );
}

export default Header;
