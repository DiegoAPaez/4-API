import { setJoke } from "./components/JokeContainer";
import "./utils/eventListeners";
import "./styles.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="bg-purple-200 h-screen flex items-center">
    <div class="flex flex-col justify-center items-center gap-10 max-w-xl mx-auto p-10 rounded-xl" id="jokes-card">
      <h1 class="text-5xl text-center">Get ready to laugh!</h1>
      <div id="jokes">
      </div>
      <button class="hover:cursor-pointer font-bold text-lg bg-purple-400 py-3 px-6 rounded-xl outline-2 outline-offset-2 outline-purple-800" id="next-joke" type="button">Next Joke!</button>
    </div>
  </div>
`;
setJoke();
