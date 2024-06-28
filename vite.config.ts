import vitePluginVue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "./",
  //@ts-ignore
  test: {
    globals: true,
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: ["src/index.ts", "src/react/react.ts", "src/vue/vue.ts"],
      name: "Scrambler",
      formats: ["es"],
      fileName: (format, name) => {
        if (name === "index") {
          return `scrambling-text-next.${format}.js`;
        }
        return `${name}.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "vue", "scrambling-text-next"],
      output: {
        globals: {
          react: "React",
          vue: "Vue",
        },
      },
    },
    outDir: "dist",
  },
  plugins: [vitePluginVue(), dts()],
});
