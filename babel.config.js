module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@common': './src/common',
          '@controller': './src/controller',
          '@model': './src/model',
          '@routes': './src/routes'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
