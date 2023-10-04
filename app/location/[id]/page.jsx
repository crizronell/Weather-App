import React from "react";
import { redirect } from "next/navigation";
import WeatherToday from "@/app/Components/WeatherToday";
import Highlights from "@/app/Components/Highlights";
import HourlyForecast from "@/app/Components/HourlyForecast";
import DailyForecast from "@/app/Components/DailyForecast";
import SearchBar from "@/app/Components/SearchBar";

async function getWeather({ params }) {
  const { id } = params;

  async function getWeatherToday() {
    const fetchWeather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${id}&aqi=yes`,
      { cache: "no-store" }
    );
    return fetchWeather.json();
  }

  async function getAstronomy() {
    const fetchAstronomy = await fetch(
      `https://api.weatherapi.com/v1/astronomy.json?key=${process.env.API_KEY}&q=${id}
       `,
      { cache: "no-store" }
    );
    return fetchAstronomy.json();
  }

  async function getHourlyForecast() {
    const fetchHourlyForecast = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${id}&days=1&aqi=no&alerts=no`,
      { cache: "no-store" }
    );
    return fetchHourlyForecast.json();
  }

  async function getDailyForecast() {
    const fetchDailyForecast = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${id}&days=3&aqi=no&alerts=no`,
      { cache: "no-store" }
    );
    return fetchDailyForecast.json();
  }

  const Weather = await getWeatherToday();
  const Astronomy = await getAstronomy();
  const Forecast = await getHourlyForecast();
  const ForecastDaily = await getDailyForecast();
  const length = Object.keys(Weather).length;
  console.log(Weather.current.condition.icon);

  return (
    <>
      <SearchBar />

      {length < 2 && redirect("/not-found")}

      <main>
        {length >= 2 && (
          <div className="grid md:grid-cols-2  gap-4 p-4">
            <div className=" rounded-xl bg-card drop-shadow-2xl ">
              <WeatherToday location={Weather} />
            </div>
            <div className="  rounded-xl   bg-card row-span-2 drop-shadow-2xl">
              <Highlights
                airQuality={Weather.current.air_quality}
                dayLight={Astronomy.astronomy.astro}
                temperature={Weather.current}
              />
            </div>

            <div className=" rounded-xl bg-card drop-shadow-2xl ">
              <DailyForecast
                Dailyforecast={ForecastDaily.forecast.forecastday}
              />
            </div>

            <div className=" rounded-xl  bg-card md:col-span-2 drop-shadow-2xl">
              <HourlyForecast
                forecast={Forecast.forecast.forecastday[0].hour}
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default getWeather;
