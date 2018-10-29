module.exports = {
    plugins: ['jest'],
    extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
    rules: {
      'no-underscore-dangle': 0,
      'no-plusplus': 0,
      camelcase: 0,
      'import/prefer-default-export': 1,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.nock.js', '**/*.spec.js']
        }
      ],
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement'
      ]
    },
    env: {
      node: true,
      'jest/globals': true
    },
    globals: {
      fetch: true
    }
  };
  