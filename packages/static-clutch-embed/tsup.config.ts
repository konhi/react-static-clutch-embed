import { defineConfig } from "tsup";


export default defineConfig({
  format: ["cjs", "esm"],
  entryPoints: ['src/**.ts', 'src/**.tsx'],
  dts: true,
  clean: true,
  treeshake: true,
  platform: "node",
})