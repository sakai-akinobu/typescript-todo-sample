module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: '>= 0.1%',
      useBuiltIns: 'usage'
    }],
    '@babel/preset-typescript',
  ],
};
