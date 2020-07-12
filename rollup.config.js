import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";
import react from "react";
import reactDom from "react-dom";
import reactIs from "react-is";
import propTypes from "prop-types";

const isProd = process.env.NODE_ENV === "production";
const extensions = [".js", ".ts", ".tsx"];

export default {
  input: "src/renderer/index.tsx",
  output: {
    file: "public/build/index.js",
    format: "iife",
  },
  plugins: [
    babel({
      extensions,
      exclude: /node_modules/,
      babelrc: false,
      babelHelpers: "runtime",
      presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
      plugins: [
        "react-require",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        [
          "@babel/plugin-proposal-object-rest-spread",
          {
            useBuiltIns: true,
          },
        ],
        [
          "@babel/plugin-transform-runtime",
          {
            corejs: 3,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
      ],
    }),
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
      exclude: ["node_modules/symbol-observable/es/*.js"],
      namedExports: {
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
        "react-is": Object.keys(reactIs),
        "prop-types": Object.keys(propTypes),
      },
    }),
    scss({
      output: "public/build/index.css",
    }),
    isProd && terser(),
  ],
};
