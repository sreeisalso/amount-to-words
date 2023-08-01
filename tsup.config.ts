import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["main.ts"],
  splitting: true,
  format: ["esm"],
  sourcemap: true,
  dts: true,
  treeshake: "smallest",
  clean: true,
  minify: "terser",
  target: ["node18", "es6"],
});
