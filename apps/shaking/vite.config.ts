import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

import { analyzer } from "vite-bundle-analyzer";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        analyzer({
            analyzerMode: "static",
        }) as PluginOption,
    ],
    build: {
        rollupOptions: {
            treeshake: "recommended",
        },
        terserOptions: {
            compress: {
                unused: true,
                dead_code: true,
                // Keeping these to be able to search for components in the outputed bundle.
                keep_classnames: true,
                keep_fargs: true,
                keep_fnames: true,
                keep_infinity: true,
            },
        }
    },
})
