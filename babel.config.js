module.exports = {
    presets: [
        "@babel/preset-env"
    ],
    plugins: [
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: false
            }
        ],
        [
            "@babel/plugin-proposal-private-methods",
            {
                loose: false
            }
        ]
    ]
};