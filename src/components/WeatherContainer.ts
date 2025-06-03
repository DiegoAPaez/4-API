import type { WeatherData } from "../models/interfaces";
import { weatherDataManage } from "../services/WeatherService";

export const setWeather = async () => {
    const weatherData: WeatherData[] | any = await weatherDataManage();
    const {
        WeatherIcon,
        Temperature: {
            Metric: { Value, Unit },
        },
    } = weatherData[0];

    const weatherContainer =
        document.querySelector<HTMLElement>("#weather-container");

    let weatherIcon = document.createElement("img");
    weatherIcon.src = `/assets/weather/${WeatherIcon.toString().padStart(
        2,
        "0"
    )}-s.png`;
    weatherContainer?.appendChild(weatherIcon);

    let temperature = document.createElement("p");
    temperature.classList.add(
        "font-bold",
        "text-lg",
        "border-2",
        "border-transparent",
        "border-l-purple-900",
        "text-purple-900",
        "pl-5",
        "py-4",
        "rounded-sm"
    );
    temperature.innerText = `${Value}º ${Unit}`;
    weatherContainer?.appendChild(temperature);
};
