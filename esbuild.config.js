module.exports = {
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    loader: { '.js': 'jsx' },
    outfile: 'public/bundle.js',
    define: {
        'process.env.NODE_ENV': JSON.stringify('"production"'),
    },
};
