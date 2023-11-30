import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'
// const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para Bootstrap
 /*  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  } */
})
