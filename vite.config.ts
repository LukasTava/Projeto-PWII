import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    // Configuração do plugin PWA para gerar o Service Worker
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // Configuração para fazer cache da nossa chamada de API para a lista de tarefas
        runtimeCaching: [{
          urlPattern: ({ url }) => url.pathname.startsWith('/tasks'),
          handler: 'CacheFirst', // Estratégia: primeiro tenta pegar do cache, depois da rede.
          options: {
            cacheName: 'tasks-api-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 3600 // Cache por 1 hora
            }
          }
        }]
      }
    })
  ],
  
  // Configuração do Vitest para os testes unitários
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});