import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";

export default defineConfig({
    input: "src/index.js",
    output: {
        dir: "dist",
        format: "es",
        name: "popupz",
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react']
        }),
        postcss({
            extract: true,
            plugins: [
                tailwindcss,
            ]
        })
    ],
    external: ["react", "react-dom", "react-icons"],
})