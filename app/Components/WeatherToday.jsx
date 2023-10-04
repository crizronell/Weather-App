import React from "react";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

function WeatherToday({ location }) {
  return (
    <>
      <div className=" flex items-center justify-between text-white font-serif  ">
        <div className="ml-[2.5rem]">
          <p className="text-xl ">{location.current.temp_c}°C</p>
          <p className="text-sm   text-white  ">
            {location.current.condition.text}
          </p>
        </div>

        <div className="mr-[2.5rem]">
          <Image
            src={`https://${location.current.condition.icon}`}
            width={75}
            height={75}
            alt="icon"
            quality={100}></Image>
        </div>
      </div>

      <hr className="w-auto h-1 mx-auto mt-1"></hr>
      <div className=" text-white mt-2 font-mono  ">
        <div className="flex items-center ml-[2.5rem]">
          <AiOutlineCalendar size={30} color="white" />
          <span className="ml-1 ">
            {location.location.localtime} {location.location.tz_id}
          </span>
        </div>
        <div className="flex items-center ml-[2.5rem] mt-2 mb-2">
          <CiLocationOn size={30} color="white" />
          <span className="ml-1 ">
            {location.location.name}, {location.location.country},{" "}
            {location.location.lat} {location.location.lon}
          </span>
        </div>
      </div>
    </>
  );
}

export default WeatherToday;
