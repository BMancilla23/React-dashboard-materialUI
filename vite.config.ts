import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles")
    }
  }
});
