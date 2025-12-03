import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['__tests__/**/*.ts', '__tests__/**/*.tsx'],
    exclude: ['__tests__/setupTests.ts'],
    environment: 'jsdom',
    setupFiles: ['__tests__/setupTests.ts']
  }
})
// End of Vite config
