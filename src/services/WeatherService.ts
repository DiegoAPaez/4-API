import type { WeatherData } from "../models/interfaces";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const LOCATION_KEY = import.meta.env.VITE_LOCATION_KEY;

export const getWeatherData = async (): Promise<WeatherData> => {
    try {
        const url = `http://dataservice.accuweather.com/currentconditions/v1/${LOCATION_KEY}?apikey=${API_KEY}&language=es-es&details=false`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Fetch error: ${response.status} - ${response.statusText}`
            );
        }
        const data = await response.json();
        saveWeatherData(data);
        return data;
    } catch (error) {
        console.error(`Error getting weather data: ${error}`);
        throw error;
    }
};

export const saveWeatherData = (data: WeatherData) => {
    const parsedData = JSON.stringify(data);
    sessionStorage.setItem("weatherData", parsedData);
};

export const loadWeatherData = (): WeatherData | null => {
    const storedData: string | null = sessionStorage.getItem("weatherData");
    return storedData ? JSON.parse(storedData) : null;
};

export const weatherDataManage = async (): Promise<WeatherData> => {
    let storedData: WeatherData | null = loadWeatherData();

    if (!storedData) {
        return await getWeatherData();
    }

    let storedDate: Date = new Date(storedData.LocalObservationDateTime);
    let storedDay: number = storedDate.getDate();
    let storedHours: number = storedDate.getHours();

    let currentDate: Date = new Date();
    let currentDay: number = currentDate.getDate();
    let currentHours: number = currentDate.getHours();

    if (storedDay == currentDay && currentHours - storedHours >= 8) {
        return await getWeatherData();
    } else {
        return storedData;
    }
};
