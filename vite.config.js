import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CHANGE THIS LINE: replace 'portfolio' with your actual repository name!
  base: '/Legacy-portfolio/', 
})