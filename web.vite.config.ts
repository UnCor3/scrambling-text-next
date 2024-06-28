import vitePluginVue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
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
