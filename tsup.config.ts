import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  splitting: false,
  sourcemap: true,
  dts: true,
  treeshake: "recommended",
  clean: true,
  minify: "terser",
  target: ["node16" , "es6"],
});