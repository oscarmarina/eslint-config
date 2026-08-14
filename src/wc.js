import { configs as wc } from 'eslint-plugin-wc';
import { fileTypes } from './base.js';
//
// ──────────────────────────────────────────────────────────────
// eslint-plugin-wc
// ──────────────────────────────────────────────────────────────
//
/** @type {import('eslint').Linter.Config} */
export const wcFilesConfig = {
  ...wc['flat/recommended'],
  files: [`**/*.${fileTypes}`],
};

export const wcFilesRules = {
  files: [`**/*.${fileTypes}`],
  rules: {
    'wc/no-constructor-attributes': 'warn',
  },
};
