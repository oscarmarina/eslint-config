import { default as litA11y } from 'eslint-plugin-lit-a11y';
import { fileTypes } from './base.js';
//
// ──────────────────────────────────────────────────────────────
// eslint-plugin-lit-a11y
// ──────────────────────────────────────────────────────────────
//
export const litA11yFilesConfig = {
  // @ts-ignore
  ...litA11y.configs.recommended,
  files: [`**/*.${fileTypes}`],
};

export const litA11yFilesRules = {
  files: [`**/*.${fileTypes}`],
  rules: {
    'lit-a11y/no-autofocus': 'off',
    'lit-a11y/anchor-is-valid': 'off',
    'lit-a11y/click-events-have-key-events': 'off',
  },
};
