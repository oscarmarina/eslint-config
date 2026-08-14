import { fileTypes } from './base.js';
//
// ──────────────────────────────────────────────────────────────
// Test Files
// ──────────────────────────────────────────────────────────────
//
export const testFilesRules = {
  files: [`**/test/**/*.${fileTypes}`],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'import-x/no-extraneous-dependencies': 'off',
    'no-unused-expressions': 'off',
  },
};
