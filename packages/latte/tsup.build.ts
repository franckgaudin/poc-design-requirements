import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/**/*.(ts|tsx)", "!./src/**/*.stories.(ts|tsx)"],
    format: ["esm"],
    clean: true,
    dts: true,
    splitting: true,
    target: "esnext"
});
