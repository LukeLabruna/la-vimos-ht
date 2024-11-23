import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module'
      },
      manifest: {
        name: "LaHicimos?",
        short_name: "LaHicimos?",
        description: "Buscador de peliculas vistas en el podcast Hoy Trasnoche",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#F45454",
        theme_color: "#FFC545",
        icons: [
          { src: "/icon/android-icon-36x36.png", sizes: "36x36", type: "image/png", density: "0.75" },
          { src: "/icon/android-icon-48x48.png", sizes: "48x48", type: "image/png", density: "1.0" },
          { src: "/icon/android-icon-72x72.png", sizes: "72x72", type: "image/png", density: "1.5" },
          { src: "/icon/android-icon-96x96.png", sizes: "96x96", type: "image/png", density: "2.0" },
          { src: "/icon/android-icon-144x144.png", sizes: "144x144", type: "image/png", density: "3.0" },
          { src: "/icon/android-icon-192x192.png", sizes: "192x192", type: "image/png", density: "4.0" }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request, url }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 días
              }
            }
          }
        ]
      }
    }),
    
  ]
});

