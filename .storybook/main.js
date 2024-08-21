module.exports = {
    stories: ['../src/stories/**/*.stories.js'],

    framework: {
        name: '@storybook/web-components-webpack5', 
        options: {}
    },
    staticDirs: ['../src'],
    docs: {
        inlineStories: true
    },
    addons: [
        '@storybook/addon-webpack5-compiler-swc', 
        // '@chromatic-com/storybook', 
        '@storybook/addon-docs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials'
    ]
};
  