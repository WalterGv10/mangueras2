import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mangueras2/', // Reemplaza con el nombre de tu repo en GitHub
});
