import vitePluginVue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "web",
  },
  plugins: [vitePluginVue()],
});
