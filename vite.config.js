import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve("./src/"),
  server: {
    port: 3000,
  },
});
