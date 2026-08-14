import htmlEslint from '@html-eslint/eslint-plugin';
import htmlEslintParser from '@html-eslint/parser';
import eslintPluginHtml from 'eslint-plugin-html';
//
// ──────────────────────────────────────────────────────────────
// HTML
// ──────────────────────────────────────────────────────────────
//
export const htmlFilesConfig = {
  ...htmlEslint.configs['flat/recommended'],
  files: ['**/*.html'],

  plugins: {
    '@html-eslint': htmlEslint,
  },

  languageOptions: {
    parser: htmlEslintParser,
  },
};

export const htmlFilesRules = {
  files: ['**/*.html'],

  rules: {
    '@html-eslint/indent': 'off',
    '@html-eslint/require-closing-tags': 'off',
    '@html-eslint/no-extra-spacing-tags': 'off',
    '@html-eslint/attrs-newline': 'off',
    '@html-eslint/use-baseline': ['error', { available: 'newly' }],
  },
};
export const eslintPluginHtmlConfig = {
  files: ['**/*.html'],

  plugins: {
    eslintPluginHtml,
  },
};
