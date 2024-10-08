import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "assets/logoTitleHTML.png",
        "assets/basquetFutLogo.png",
        "assets/BFDesktop.jpg",
        "assets/fondo2BF.jpg",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Basquet Futuro",
        short_name: "Basquet Futuro",
        description:
          "App de entrenamiento de basquet.",
        theme_color: "#000",
        background_color: "#000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "./assets/logoTitleHTML.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable any",
            
          },
          {
            src: "./assets/logoTitleHTML.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable any",
          },
          {
            src: "./assets/logoTitleHTML.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "maskable any",
          },
        ],
        orientation: "portrait",
      },
    }),
  ],
  build: {
    outDir: "dist", // o tu directorio de salida preferido
  },
  server: {
    open: true,
  },
});
