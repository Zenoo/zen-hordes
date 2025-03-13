// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          "args": "all",
          "argsIgnorePattern": "^_",
          "caughtErrors": "all",
          "caughtErrorsIgnorePattern": "^_",
          "destructuredArrayIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        },
      ],
      '@typescript-eslint/consistent-type-definitions': [
        'error',
        'type'
      ],
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
        },
      ],
    }
  },
  {
    files: [
      'eslint.config.mjs',
      'webpack/**/*.js',
    ],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    ignores: [
      'webpack/**/*.js',
    ],
  }
);
