module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:jest/all'
  ],
  plugins: ['jest', 'modules-newline'],
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.eslint.json']
  },
  env: {
    browser: true,
    jest: true,
    'jest/globals': true
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    indent: [2, 2],
    'react/jsx-filename-extension': 0,
    'comma-dangle': [2, 'never'],
    quotes: [2, 'single'],
    'implicit-arrow-linebreak': 0,
    'no-trailing-spaces': 0,
    'react/prop-types': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-max-props-per-line': [2, {
      maximum: 1,
      when: 'always' 
    }],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent-props': [2, 2],
    'max-len': [1, {
      code: 120
    }],
    'object-property-newline': [2, {
      allowAllPropertiesOnSameLine: false
    }],
    'object-curly-newline': [2, {
      ObjectExpression: {
        multiline: true,
        minProperties: 1 
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2 
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 2 
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2 
      }
    }],
    'modules-newline/import-declaration-newline': 2
  }
};
