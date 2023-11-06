export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/compose.mjs',
            format: 'module'
        }, {
            file: 'dist/compose.js',
            format: 'cjs'
        }, {
            file: 'dist/compose.umd.js',
            format: 'umd',
            name: 'compose'
        }
    ]
};