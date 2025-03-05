import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api to http://localhost:8080/v1
      "/api": {
        target: "http://localhost:8080/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/passkey": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/passkey/, ""),
      },
    },
  },
  base: "/",
});
