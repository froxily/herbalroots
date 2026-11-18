import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { readSiteUrl } from './scripts/site-config.mjs'

export default defineConfig(({ mode }) => {
  const site = readSiteUrl(loadEnv(mode, process.cwd()).VITE_SITE_URL)
  return {
    plugins: [react()],
    base: site?.pathname ?? '/',
    define: { __SITE_URL__: JSON.stringify(site?.href ?? '') },
    server: { port: 3000 },
  }
})
