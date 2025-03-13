// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "AssignmentExpression[left.object.name='store']",
          message: "Do not update the store directly. Use setStore instead.",
        },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
    },
  },
  {
    files: ["eslint.config.mjs", "webpack/**/*.js"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  {
    ignores: ["webpack/**/*.js"],
  }
);
