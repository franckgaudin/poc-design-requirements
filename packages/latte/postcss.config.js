import { defineConfig, DefaultPresetEnvOptions } from "@workleap/postcss-configs";
import postcss from "postcss";

export default defineConfig({
    presetEnvOptions: {
        ...DefaultPresetEnvOptions,
        browsers: "> .5% and last 2 versions",
        debug: true,
        plugins: [
            postcss([
                require("postcss-modules")({
                    generateScopedName: "[name]__[local]___[hash:base64:5]",
                    hashPrefix: "prefix",
                }),
            ])
        ]
    }
});
