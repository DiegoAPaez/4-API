import type { Joke, JokeSource } from "../models/interfaces";

export const getJoke = async (source: JokeSource): Promise<Joke> => {
    try {
        let url: string;
        const headers = { Accept: "application/json" };

        switch (source) {
            case "dadjoke":
                url = "https://icanhazdadjoke.com/";
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
        default:
            throw new Error(`Unsupported source: ${source}`);
    }
};
