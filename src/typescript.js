import { configs as tseslint } from 'typescript-eslint';
import { fileTypes } from './base.js';
//
// ──────────────────────────────────────────────────────────────
// typescript-eslint
// ──────────────────────────────────────────────────────────────
//
/**
 * @param {string} [tsconfigRootDir]
 * @returns {import('eslint').Linter.Config[]}
 */
export const createTsFilesConfig = (tsconfigRootDir) =>
  [...tseslint.strict, ...tseslint.stylistic].map((conf) => ({
    ...conf,
    files: ['**/*.ts'],

    // @ts-ignore
    ...(conf.languageOptions && {
      languageOptions: {
        // @ts-ignore
        ...conf.languageOptions,

        parserOptions: {
          // @ts-ignore
          ...conf.languageOptions.parserOptions,

          projectService: {
            allowDefaultProject: [
              `*.config.${fileTypes}`,
              `*.conf.${fileTypes}`,
            ],
          },

          ...(tsconfigRootDir && { tsconfigRootDir }),
        },
      },
    }),
  }));

export const tsFilesRules = {
  files: ['**/*.ts'],
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
  },
};
