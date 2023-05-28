module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:import/recommended",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.json"
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [2, {
      "extensions": [".tsx"]
    }],
    "react/function-component-definition": [2, {
      "namedComponents": ["function-declaration", "arrow-function"],
      "unnamedComponents": ["function-expression", "arrow-function"]
    }],
    "camelcase": [2, {
      "ignoreImports": true,
      "properties": "never"
    }],
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "import/extensions": [2, {
      "ignorePackages": true,
      "pattern": {
        "svg": "ignorePackages",
        "css": "ignorePackages",
        "webp": "ignorePackages"
      }
    }],
    "no-param-reassign": ["error", {
      "props": false
    }],
    "import/no-extraneous-dependencies": [0, {
      "devDependencies": false
    }],
    "react/display-name": 0,
    "no-restricted-exports": 0
  }
};