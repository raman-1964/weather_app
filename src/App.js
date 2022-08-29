
import { useState, useEffect } from "react";
import WeatherCard from "./weatherCard";

function App() {

  const [search, setSearch] = useState("pune");
  const [myData, setmyData] = useState({});

  const searchweather = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=711c86a4430604d0d971f5b5a6eb4b4e`);
      const data = await res.json();

      const { temp, pressure, humidity } = data.main;
      const { sunrise, country } = data.sys;
      const city = data.name;
      const weatherMood = data.weather[0].main;
      const { speed: wSpeed } = data.wind;
      console.log(data);
      const alldata = { temp, humidity, pressure, sunrise, country, city, weatherMood, wSpeed };
      setmyData(alldata);

    } catch (error) {

    }
  }

  useEffect(() => {
    searchweather();
  }, [])


  return (
    <>
      <div className="main_div">

        <div className="search">
          <input type="text" placeholder="enter city name..." className="forsearch" value={search} onChange={(e) => setSearch(e.target.value)} autoComplete="off" />
          <button id="btn" onClick={searchweather}>search</button>
        </div>

        <WeatherCard tmpInfo={myData} />
      </div>
    </>
  );
}

export default App;
