export interface Joke {
    id: string;
    joke: string;
    source: string;
}

export type JokeSource = "dadjoke";

export interface JokeData {
    joke: string;
    rate: number;
    date: Date;
}

export interface JokeStorage {
    id: string;
    data: JokeData;
}
