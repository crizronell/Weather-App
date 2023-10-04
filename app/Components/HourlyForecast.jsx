import React from "react";
import Image from "next/image";
function HourlyForecast({ forecast }) {
  return (
    <>
      <h2 className="ml-[1.5rem] text-white font-serif p-4">Today's at</h2>
      <div className="grid gap-2  grid-cols-template p-4">
        {forecast.map((item) => (
          <div
            className="text-white text-center rounded-xl bg-card drop-shadow-xl"
            key={item.icon}>
            <p>{item.time.slice(11, 16)}</p>
            <Image
              className="mx-auto"
              src={`https:${item.condition.icon}`}
              width={100}
              height={100}
              alt="icon"
              quality={100}></Image>
            <p>{item.temp_c}°C</p>
            <p>{item.condition.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default HourlyForecast;
