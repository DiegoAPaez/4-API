import type { Joke, JokeStorage } from "../models/interfaces";
import { getJoke, formatStorageJoke, storeJoke } from "../services/JokeService";

export const setJoke = async () => {
    const jokeContainer = document.querySelector("#jokes") as HTMLDivElement;
    const jokeP = document.createElement("p");
    jokeContainer.innerHTML = ``;

    let newJoke: Joke = await getJoke("dadjoke");
    let storage: JokeStorage = formatStorageJoke(newJoke);
    storeJoke(storage);
    if (newJoke) {
        jokeP.innerText = newJoke.joke;
        jokeP.classList.add("text-center");
        jokeP.classList.add("text-lg");
        jokeP.id = "joke-text";
        jokeP.dataset.id = newJoke.id;
        jokeContainer?.appendChild(jokeP);
    }
};
