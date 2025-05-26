import { getJoke } from "../services/JokeService";

export const setJoke = async () => {
    const jokeContainer = document.querySelector("#jokes") as HTMLDivElement;
    jokeContainer.innerHTML = ``;
    const jokeP = document.createElement("p");
    let newJoke = await getJoke("dadjoke");
    if (newJoke) {
        jokeP.innerText = newJoke.joke;
        jokeP.classList.add("text-center");
        jokeP.classList.add("text-lg");
        jokeContainer?.appendChild(jokeP);
    }
};
