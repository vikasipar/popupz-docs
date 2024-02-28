import { defineConfig } from "rollup";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

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
        })
    ],
    external: ["react", "react-dom", "react-icons"],
})