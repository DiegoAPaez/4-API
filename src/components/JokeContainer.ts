import { getJoke } from "../services/JokeService";

export const setJoke = async () => {
    const jokes = document.querySelector("#jokes");
    let joke = await getJoke("dadjoke");

    if (jokes) {
        jokes.innerHTML = joke.joke;
    }
};
