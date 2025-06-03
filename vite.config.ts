import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist",
        assetsDir: "assets",
        sourcemap: false,
        emptyOutDir: true,
    },
    publicDir: "public",
    server: {
        port: 5173,
        open: true,
    },
});
