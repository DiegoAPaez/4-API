import { setJoke } from "../components/JokeContainer";

document.addEventListener("DOMContentLoaded", () => {
    const nextJokeButton: HTMLButtonElement | null =
        document.querySelector("#next-joke");

    if (nextJokeButton) {
        nextJokeButton.addEventListener("click", async () => {
            await setJoke();
        });
    } else {
        console.error("Button with ID 'next-joke' not found.");
    }
});
