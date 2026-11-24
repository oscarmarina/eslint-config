import htmlEslint from '@html-eslint/eslint-plugin';
import { createHtmlProcessor } from 'eslint-plugin-html';
//
// ──────────────────────────────────────────────────────────────
// HTML
// ──────────────────────────────────────────────────────────────
//
// `@html-eslint` lints the HTML itself; the `eslint-plugin-html` processor
// extracts inline `<script>` tags as virtual `*.html/part-N.js` files, so they
// get the regular JS config. `lintHtml: true` keeps the whole HTML as a block
// for `@html-eslint`.
//
export const htmlFilesConfig = {
  ...htmlEslint.configs['flat/recommended'],
  files: ['**/*.html'],

  plugins: {
    '@html-eslint': htmlEslint,
  },

  language: '@html-eslint/html',
  processor: createHtmlProcessor({ lintHtml: true }),
};

export const htmlFilesRules = {
  files: ['**/*.html'],

  rules: {
    '@html-eslint/indent': 'off',
    '@html-eslint/element-newline': 'off',
    '@html-eslint/require-closing-tags': 'off',
    '@html-eslint/no-extra-spacing-tags': 'off',
    '@html-eslint/attrs-newline': 'off',
    '@html-eslint/use-baseline': ['error', { available: 'newly' }],
  },
};
