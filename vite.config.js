import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    port: 3000,
  },
  root: path.resolve("./src/"),
  build: {
    outDir: "../dist",
  },
});
