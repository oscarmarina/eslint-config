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
    'no-unused-expressions': 'off',
  },
};
