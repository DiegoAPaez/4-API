import type { Joke, JokeStorage } from "../models/interfaces";
import {
    getJoke,
    formatStorageJoke,
    storeJoke,
    getRandomJokeSource,
} from "../services/JokeService";
import { setRandomBackground } from "./ImageContainer";

export const setJoke = async () => {
    setRandomBackground();
    const jokeContainer = document.querySelector("#jokes") as HTMLDivElement;
    const jokeP = document.createElement("p");
    jokeContainer.innerHTML = ``;

    let randomSource = getRandomJokeSource();
    let newJoke: Joke = await getJoke(randomSource);
    let storage: JokeStorage = formatStorageJoke(newJoke);
    storeJoke(storage);
    if (newJoke) {
        jokeP.innerText = newJoke.joke;
        jokeP.classList.add(
            "text-center",
            "text-xl",
            "text-white",
            "my-8",
            "max-w-2xl"
        );
        jokeP.id = "joke-text";
        jokeP.dataset.id = newJoke.id;
        jokeContainer?.appendChild(jokeP);
    }
};
