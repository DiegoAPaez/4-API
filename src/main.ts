import "./utils/eventListeners";
import "./styles.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="bg-purple-200 h-screen overflow-hidden" id="app-content">
    <section class="flex justify-center md:justify-start items-center">
        <div
            class="flex flex-row justify-center items-center mt-5"
            id="weather-container"
        ></div>
    </section>

    <section class="absolute top-[50%] left-[50%] translate-[-50%] w-full" id="jokes-section">
        <div
            class="flex flex-col justify-center items-center mx-auto p-10 rounded-xl"
            id="jokes-card"
        >
            <h1 class="text-white text-6xl text-center">Get ready to laugh!</h1>
            <div id="jokes"></div>
            <div id="scores" class="flex justify-center">
                <picture>
                    <img
                        class="w-[60px] hover:cursor-pointer"
                        src="/assets/icons/1F622.svg"
                        id="bad-joke"
                        alt="bad"
                        data-value="1"
                    />
                </picture>
                <picture class="mx-5">
                    <img
                        class="w-[60px] hover:cursor-pointer"
                        src="/assets/icons/1F610.svg"
                        id="regular-joke"
                        alt="regular"
                        data-value="2"
                    />
                </picture>
                <picture>
                    <img
                        class="w-[60px] hover:cursor-pointer"
                        src="/assets/icons/1F923.svg"
                        id="good-joke"
                        alt="good"
                        data-value="3"
                    />
                </picture>
            </div>
            <button
                class="hover:cursor-pointer text-white font-bold text-lg bg-purple-500 py-3 px-6 mt-6 rounded-xl outline-2 outline-offset-2 outline-purple-300"
                id="next-joke"
                type="button"
            >
                Next Joke!
            </button>
        </div>
    </section>
</div>

`;
