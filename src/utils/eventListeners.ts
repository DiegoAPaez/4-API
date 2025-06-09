import { setJoke } from "../components/JokeContainer";
import { setWeather } from "../components/WeatherContainer";
import { reportJokes } from "./JokeStorage";

document.addEventListener("DOMContentLoaded", () => {
    setJoke();
    loadJokes();
    rateJokes();
    setWeather();
});

const loadJokes = () => {
    const nextJokeButton: HTMLButtonElement | null =
        document.querySelector("#next-joke");

    if (nextJokeButton) {
        nextJokeButton.addEventListener("click", async () => {
            printJokes();
            await setJoke();
        });
    } else {
        console.error("Button with ID 'next-joke' not found.");
    }
};

const rateJokes = () => {
    const rateBad = document.querySelector("#bad-joke") as HTMLButtonElement;
    const rateRegular = document.querySelector(
        "#regular-joke"
    ) as HTMLButtonElement;
    const rateGood = document.querySelector("#good-joke") as HTMLButtonElement;
    const rates = [rateBad, rateRegular, rateGood];

    rates.forEach((rate) =>
        rate?.addEventListener("click", () => {
            const currentJoke: HTMLParagraphElement | null =
                document.querySelector("#joke-text");
            if (currentJoke) {
                const jokeId = currentJoke.dataset.id;
                const rateValue = parseInt(rate.dataset.value ?? "0");
                let storedJoke = reportJokes.find((joke) => joke.id == jokeId);
                if (storedJoke) {
                    storedJoke.data.rate = rateValue;
                }
            }
        })
    );
};

const printJokes = () => {
    console.clear();
    console.table(reportJokes.map((joke) => {
        return {
            joke: joke.data.joke,
            rate: joke.data.rate,
            date: joke.data.date.toLocaleDateString(),
        };
    }));
}