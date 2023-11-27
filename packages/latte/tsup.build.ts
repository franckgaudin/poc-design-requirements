import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/*.(ts|tsx)"],
    format: ["esm"],
    minify: true,
    splitting: false,
    clean: true
});
