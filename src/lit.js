import { configs as lit } from 'eslint-plugin-lit';
import { fileTypes } from './base.js';
//
// ──────────────────────────────────────────────────────────────
// eslint-plugin-lit
// ──────────────────────────────────────────────────────────────
//
/** @type {import('eslint').Linter.Config} */
export const litFilesConfig = {
  ...lit['flat/recommended'],
  files: [`**/*.${fileTypes}`],
};

export const litFilesRules = {
  files: [`**/*.${fileTypes}`],
  rules: {
    'lit/lifecycle-super': 'error',
    'lit/no-native-attributes': 'off',
    'lit/no-useless-template-literals': 'off',
    'lit/binding-positions': 'off',
    'lit/no-invalid-html': 'off',
  },
};
