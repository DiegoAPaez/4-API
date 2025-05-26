import fs from "fs";

const directoryPath = "assets/images";

try {
    const files = fs.readdirSync(directoryPath);
    console.log(files);
} catch (error) {
    console.error("Error reading directory:", error);
}
