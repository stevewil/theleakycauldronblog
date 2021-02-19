module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-trailing-commas',
    'standard-react',
  ],
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
    fetch: true,
    sessionStorage: true,
    localStorage: true,
    alert: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    camelcase: 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'default-case-last': 'off',
    'no-useless-backreference': 'off',
    'no-loss-of-precision': 'off',
    'no-unreachable-loop': 'off',
  },
}
