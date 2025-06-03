export const setRandomBackground = (): void => {
    const app = document.querySelector<HTMLDivElement>("#app-content");
    if (!app) return;
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    app.style.backgroundImage = `url(/assets/images/magicpattern-${randomNumber}.webp)`;
    app.style.backgroundPosition = "center";
    app.style.backgroundSize = "auto";
    app.style.backgroundRepeat = "no-repeat";
    app.style.width = "auto";
};
