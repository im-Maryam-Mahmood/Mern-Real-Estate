import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'VITE_',
  server: {
    proxy:{
      '/api': {
        target:'http://localhost:3000',
        secure:false,
    },
    },
  },
  plugins: [react()],
});
