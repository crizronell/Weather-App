import React from "react";
import Image from "next/image";
function DailyForecast({ Dailyforecast }) {
  return (
    <>
      <h2 className="ml-[1.5rem] text-white font-serif p-4">
        3 Days's Forecast
      </h2>
      <div className="p-4">
        {Dailyforecast.map((item) => (
          <div className="flex items-center justify-between text-white ">
            <Image
              src={`https://${item.day.condition.icon}`}
              width={75}
              height={75}
              alt="icon"
              quality={100}
              key={item.icon}></Image>
            <p>{item.day.maxtemp_c}°C</p>
            <p>{item.date.slice(5, 10)}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default DailyForecast;
