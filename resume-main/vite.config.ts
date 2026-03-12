import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command }) => {
  // Ensure correct asset paths when deployed to GitHub Pages project sites
  // like https://<org>.github.io/<repo>/
  // `gh-pages` runs locally, so `GITHUB_REPOSITORY` often isn't set. Default.
  const repo = process.env.GITHUB_REPOSITORY
  const repoName = repo ? repo.split('/')[1] : 'resume'

  return {
    base: command === 'build' ? `/${repoName}/` : '/',
    plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used - do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Avoid esbuild usage when child-process spawning is restricted.
  esbuild: false,
  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
