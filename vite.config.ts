import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { createRequire } from "module";
import inject from "@rollup/plugin-inject";
import nodelib from "node-stdlib-browser";
const require = createRequire(import.meta.url);
const esbuildShim = require.resolve("node-stdlib-browser/helpers/esbuild/shim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    {
      ...inject({
        global: [esbuildShim, "global"],
        process: [esbuildShim, "process"],
        Buffer: [esbuildShim, "Buffer"],
      }),
      enforce: "post",
    },
  ],
  resolve: {
    alias: nodelib,
  },
  optimizeDeps: {
    include: ["buffer", "process"],
  },
});
