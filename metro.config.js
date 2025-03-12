// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */

// const {
//     wrapWithReanimatedMetroConfig,
// } = require('react-native-reanimated/metro-config');
// const config = {};

// module.exports =wrapWithReanimatedMetroConfig(mergeConfig(getDefaultConfig(__dirname), config));

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// Get the default Metro configuration.
const defaultConfig = getDefaultConfig(__dirname);
// Customize Metro configuration for react-native-svg-transformer.
defaultConfig.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer'
);
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  ext => ext !== 'svg'
);
defaultConfig.resolver.sourceExts.push('svg');
// Export the final merged configuration.
module.exports = mergeConfig(defaultConfig, {
  // You can add any other customizations here if needed.
});