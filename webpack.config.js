const { DefinePlugin } = require('webpack');

module.exports = {
    // your other webpack configurations,
    resolve: {
        fallback: {
            stream: require.resolve('stream-browserify'),
        },
    },
    plugins: [
        new DefinePlugin({
            'process.browser': 'true',
        }),
        // other plugins you might have
    ],
};
