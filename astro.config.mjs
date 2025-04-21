// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jan-s-watt.jp",

  server: {
    host: "127.0.0.1",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
