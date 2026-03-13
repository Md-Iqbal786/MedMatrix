module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/projects/MedMatrix/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/2f8f9_d93a1275._.js",
  "chunks/[root-of-the-server]__e1381183._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/projects/MedMatrix/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];