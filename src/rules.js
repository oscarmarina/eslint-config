//
// ──────────────────────────────────────────────────────────────
// Global Rules
// ──────────────────────────────────────────────────────────────
//
export const globalRulesConfig = {
  rules: {
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-empty-function': 'error',
  },
};
