import {dts} from "bun-plugin-dtsx";

await Bun.build({
    entrypoints: ["src/index.ts"],
    outdir: "dist",
    target: "node",
    format: "esm",
    splitting: false,
    sourcemap: "external",
    minify: false,
    external: ["ky"],
    plugins: [dts()]
});

console.log("Build complete → dist/");