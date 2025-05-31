export interface Joke {
    id: string;
    joke: string;
    source: string;
}

export type JokeSource = "dadjoke" | "chucknorris";

export interface JokeData {
    joke: string;
    rate: number;
    date: Date;
}

export interface JokeStorage {
    id: string;
    data: JokeData;
}

export interface WeatherData {
    LocalObservationDateTime: string;
    WeatherIcon: number;
    Temperature: Temperature;
    WeatherText?: string;
    IsDayTime?: boolean;
}

interface Temperature {
    Metric: TemperatureSystem;
    Imperial?: TemperatureSystem;
}

export interface TemperatureSystem {
    Value: number;
    Unit: string;
    UnitType: number;
}
