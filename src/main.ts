import { setJoke } from "./components/JokeContainer";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Get you joke!</h1>
    <div id="jokes">
    </div>
    <div>
    </div>
  </div>
`;
setJoke();
