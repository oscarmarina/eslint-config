import js from '@eslint/js';
import globals from 'globals';

export const fileTypes = '{js,ts,mjs}';
//
// ──────────────────────────────────────────────────────────────
// Base config
// ──────────────────────────────────────────────────────────────
//
export const baseConfig = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2023,
        ...globals.mocha,
      },
    },
  },
];
