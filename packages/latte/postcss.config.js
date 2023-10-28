import { defineConfig, DefaultPresetEnvOptions } from "@workleap/postcss-configs";

export default defineConfig({
    presetEnvOptions: {
        ...DefaultPresetEnvOptions,
        browsers: "> .5% and last 2 versions",
        debug: true
    }
});
