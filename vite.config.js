import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import obfuscator from "vite-plugin-javascript-obfuscator";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    obfuscator({
      compact: true,
      controlFlowFlattening: false, // Set to false if the site doesn't load
      deadCodeInjection: false, // Keeps the file size small
      stringArray: true,
      rotateStringArray: true,
    }),
  ],
  build: {
    sourcemap: false, // CRITICAL: This hides the "Source" tab in browsers
    minify: "terser",
  },
});
