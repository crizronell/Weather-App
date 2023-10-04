import React from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as WiIcons from "react-icons/wi";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";

function Highlights({ airQuality, temperature, dayLight }) {
  const Air = [
    {
      id: 1,
      text: "Co",
      data: `${airQuality.co}`,
    },
    {
      id: 2,
      text: "NO2",
      data: `${airQuality.no2}`,
    },
    {
      id: 3,
      text: "03",
      data: `${airQuality.o3}`,
    },
    {
      id: 4,
      text: "So2",
      data: `${airQuality.so2}`,
    },
  ];
  const Day = [
    {
      id: 1,
      text: "Sunrise",
      data: `${dayLight.sunrise}`,
      icon: <WiIcons.WiSunrise size={30} color="white" />,
    },
    {
      id: 2,
      text: "Sunset",
      data: `${dayLight.sunset}`,
      icon: <WiIcons.WiSunset size={30} color="white" />,
    },
  ];
  const Temp = [
    {
      id: 1,
      text: "Humidity",
      data: `${temperature.humidity}%`,
      icon: <WiIcons.WiHumidity size={30} color="white" />,
    },
    {
      id: 2,
      text: "Pressure",
      data: `${temperature.pressure_in}hPa`,
      icon: <Fa6Icons.FaGaugeHigh size={30} color="white" />,
    },
    {
      id: 3,
      text: "Visibility",
      data: `${temperature.vis_km}km`,
      icon: <MdIcons.MdOutlineVisibility size={30} color="white" />,
    },
    {
      id: 4,
      text: "Feels Like",
      data: `${temperature.feelslike_c}°C`,
      icon: <FaIcons.FaTemperatureHigh size={30} color="white" />,
    },
  ];

  return (
    <>
      <h2 className="ml-[1.5rem] text-white font-serif p-4">
        Today's highlights
      </h2>
      <div className="grid xl:grid-cols-2 gap-2 p-4">
        <div className="text-white rounded-xl bg-card drop-shadow-xl">
          <h1 className="ml-[1.5rem] mt-1 font-serif">Air Quality Index</h1>
          <div className="flex items-center justify-around  min-h-[120px]  ">
            <BsIcons.BsWind className="text-3xl" />
            {Air.map((item) => (
              <div key={item.id}>
                <p className="font-serif">{item.text}</p>
                <p className="font-mono">{item.data}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white rounded-xl bg-card drop-shadow-xl">
          <h1 className="ml-[1.5rem] mt-1 font-serif ">Sunrise and Sunset</h1>
          <div className="flex items-center justify-around min-h-[120px] ">
            {Day.map((item) => (
              <>
                {item.icon}
                <div key={item.icon}>
                  <h1>{item.text}</h1>
                  <p>{item.data}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-2  grid-cols-2 min-h-[120px] p-4  ">
        {Temp.map((item) => (
          <div
            className=" text-white rounded-xl bg-card drop-shadow-xl"
            key={item.text}>
            <p className="font-serif p-2">{item.text}</p>
            <div className="flex items-center justify-between ml-[1.5rem] ">
              {item.icon}
              <p className=" font-mono p-4 ">{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Highlights;
