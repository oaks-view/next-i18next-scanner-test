/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  generateBuildId: () => process.env.SOURCE_VERSION || null,

  // We create custom aliases for commonly used folders so we don't need to import using nested structure ../../..
  webpack(config) {
    config.resolve.alias['@root'] = path.join(__dirname);
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    return config;
  },
};
