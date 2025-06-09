import type {
    Joke,
    JokeData,
    JokeSource,
    JokeStorage,
} from "../models/interfaces";
import { reportJokes } from "../utils/JokeStorage";

export const getJoke = async (source: JokeSource): Promise<Joke> => {
    try {
        let url: string;
        const headers = { Accept: "application/json" };

        switch (source) {
            case "dadjoke":
                url = "https://icanhazdadjoke.com/";
                break;
            case "chucknorris":
                url = "https://api.chucknorris.io/jokes/random";
                break;
            default:
                throw new Error(`Provided source: '${source}' is unsupported`);
        }

        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(
                `Fetch error: ${response.status} - ${response.statusText}`
            );
        }
        const data = await response.json();
        return formatJokeData(data, source);
    } catch (error) {
        console.error(`Error getting joke: ${error}`);
        throw error;
    }
};

export const formatJokeData = (data: any, source: JokeSource): Joke => {
    switch (source) {
        case "dadjoke":
            return {
                id: data.id,
                joke: data.joke,
                source: "dadjoke",
            };
        case "chucknorris":
            return {
                id: data.id,
                joke: data.value,
                source: "chucknorris",
            };
        default:
            throw new Error(`Unsupported source: ${source}`);
    }
};

export const formatStorageJoke = (element: Joke): JokeStorage => {
    let jokeData: JokeData = {
        joke: element.joke,
        rate: 0,
        date: new Date(Date.now()),
    };

    let newEntry: JokeStorage = {
        id: element.id,
        data: jokeData,
    };

    return newEntry;
};

export const storeJoke = (entry: JokeStorage): void => {
    reportJokes.push(entry);
};

export const getRandomJokeSource = (): JokeSource => {
    const sources: JokeSource[] = ["dadjoke", "chucknorris"];
    const randomIndex = Math.floor(Math.random() * sources.length);
    return sources[randomIndex];
};
