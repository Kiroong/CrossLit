import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/CrossLit/",
  build: {
    outDir: "../..",
    emptyOutDir: false,
  },
  server: {
    open: true,
  },
})
