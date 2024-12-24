import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  root: ".",
  base: "./",
  server: {
    port: 3000,
    cors: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@common": "/src/common",
      "@features": "/src/features",
      "@constants": "/src/constants",
      "@services": "/src/services",
      "@config": "/src/config",
      "@context": "/src/context",
      "@lib": "/src/lib",
      "@types": "/src/types",
      "@utility": "/src/utility",
      "@app": "/src/app",
      "@layout": "/src/layout",
      "@routes": "/src/routes",
    },
  },
});
