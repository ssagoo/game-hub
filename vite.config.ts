import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//export default defineConfig({ -- original option
export default defineConfig(({ mode }) => ({
  //const envFile = mode === 'development' ? '.env.development' : '.env.production';
  //dotenv.config({ path: envFile });
  define: {
    "process.env.NODE_ENV": (mode === "staging" && `"production"`) || `"${mode}"`,
  },
  base: "/",
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    host: true,
    origin: "http://0.0.0.0:8080",
    port: 8080,
    strictPort: true,
    watch: {
      usePolling: true
    }
  }
}));
