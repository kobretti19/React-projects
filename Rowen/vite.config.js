import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Optional: not needed unless doing advanced Tailwind setup

export default defineConfig({
  plugins: [react(), tailwindcss()], // ✅ All plugins inside one array
});
