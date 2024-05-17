import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

import components from "./rollup.list.components.js";

const external = ["vue"];

export default Object.keys(components).map((name) => ({
  input: Object.keys(components).map((key) => components[key]),
  external,
  output: { dir: "lib" }, // output location
  plugins: [
    nodeResolve(),
    postcss({
      extensions: [".css"],
    }),
    vue({ css: true }),
    terser(),
  ],
}));
