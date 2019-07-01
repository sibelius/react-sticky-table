module.exports = ({ config }) => {
  config.module.rules[0].test = /\.(js|jsx|ts|tsx)?$/;
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.json', '.mjs'];

  return config;
};
