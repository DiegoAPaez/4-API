import type { WeatherData } from "../models/interfaces";
import { weatherDataManage } from "../services/WeatherService";

export const setWeather = async () => {
    const weatherData: WeatherData[] | any = await weatherDataManage();
    const {
        WeatherIcon,
        Temperature: {
            Metric: { Value },
        },
    } = weatherData[0];

    const weatherContainer =
        document.querySelector<HTMLElement>("#weather-container");

    let weatherIcon = document.createElement("img");
    weatherIcon.src = `assets/weather/${WeatherIcon.toString().padStart(
        2,
        "0"
    )}-s.png`;
    weatherContainer?.appendChild(weatherIcon);

    let temperature = document.createElement("p");
    temperature.innerText = `${Value}`;
    weatherContainer?.appendChild(temperature);
};
