# 📚 Sprint 4 | API

## [🚀 CLICK TO VISIT DEPLOYMENT](https://4-api.vercel.app/)

## 🎯 Goals

-   Understand how an API works.
-   Learn about other free APIs.
-   Creation of unit tests .

### Key Tasks for the Project

1. **Display Jokes from API**

    - Fetch and display a joke from the provided API on app start.
    - Implement a "Next joke" button to fetch and display a new joke.

2. **Initial Layout**

    - Create a basic layout for the main screen, placing all UI elements (joke, buttons, etc.).

3. **Joke Assessment and Reporting**

    - Create an array to store joke assessments.
    - Save the assessment date in ISO format and a score (1-3) for each joke.
    - Add three buttons for scoring each joke (1 = worst, 3 = best).
    - Allow users to skip voting or change their score before moving to the next joke.
    - Update and log the array to the console.

4. **Weather Information Integration**

    - Fetch and display weather information from a weather API on app start.

5. **Alternate Joke Sources**

    - Integrate at least one additional joke API.
    - Alternate or randomly select jokes from different APIs.

6. **Responsive and Enhanced Layout**
    - Refine the website layout for responsiveness and improved user experience.
    - Display weather as an icon instead of text.
    - (Bonus) Implement dynamic container shapes (SVGs) that change with each new joke.

## 🛠️ Getting Started

### 1️⃣ Clone this repository

```bash
git clone https://github.com/DiegoAPaez/4-API.git
cd 4-API
```

### 2️⃣ Install Dependencies

Make sure you have Node.js installed. Then install the packages:

```bash
npm install
```
### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add your API keys:

```plaintext
VITE_WEATHER_API_KEY=<your_weather_api_key>
VITE_LOCATION_KEY=<your_weather_location_key>
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

## 📁 Folder Structure

```
📂 public/
 ┗ 📂 assets/
📂 src/
 ┣ 📂 components/
 ┣ 📂 models/
 ┣ 📂 services/
 ┣ 📂 utils/
 ┣ 📄 main.ts
 ┗ 📄 styles.css
📄 index.html
📄 README.md
```

## 💻 Technologies Used

![HTML Icon](https://skillicons.dev/icons?i=html "HTML Icon")
![CSS Icon](https://skillicons.dev/icons?i=css "CSS Icon")
![Tailwind Icon](https://skillicons.dev/icons?i=tailwind "Tailwind Icon")
![Typescript Icon](https://skillicons.dev/icons?i=typescript "Typescript Icon")
![Vite Icon](https://skillicons.dev/icons?i=vite "Vite Icon")
![Node Icon](https://skillicons.dev/icons?i=nodejs "Node Icon")

## 🤝 Contributions

Contributions are welcome. Please follow the [project's guidelines](CONTRIBUTING.md) for submitting changes.

## ⏳ Project Status

![Static Badge](https://img.shields.io/badge/Completed-Completed?style=flat-square&label=Status) ![Static Badge](https://img.shields.io/badge/Pending-Revision?style=flat-square&label=Revision&color=yellow)
