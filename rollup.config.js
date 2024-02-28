import { defineConfig } from "rollup";

export default defineConfig({
    input: "src/index.js",
    output: {
        dir: "dist",
        format: "es",
        name: "popupz",
    },
    external: ["react", "react-dom"],
})