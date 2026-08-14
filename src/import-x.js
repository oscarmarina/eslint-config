import {
  flatConfigs as importPlugin,
  createNodeResolver,
} from 'eslint-plugin-import-x';
import { parser as tsParser } from 'typescript-eslint';
import { fileTypes } from './base.js';
//
// ──────────────────────────────────────────────────────────────
// eslint-plugin-import-x
// ──────────────────────────────────────────────────────────────
//
/**
 * @param {string} [tsconfigRootDir]
 * @returns {import('eslint').Linter.Config[]}
 */
export const createImportFilesConfig = (tsconfigRootDir) =>
  [importPlugin.recommended, importPlugin.typescript].map((conf) => ({
    ...conf,
    files: [`**/*.${fileTypes}`],
    languageOptions: {
      ...conf.languageOptions,
      parser: tsParser,
      ...(tsconfigRootDir && {
        parserOptions: { tsconfigRootDir },
      }),
    },
    settings: {
      ...conf.settings,
      'import-x/parsers': {},
      'import-x/extensions': [
        '.js',
        '.mjs',
        '.cjs',
        '.ts',
        '.tsx',
        '.cts',
        '.mts',
      ],
    },
  }));

export const importFilesRules = {
  files: [`**/*.${fileTypes}`],
  rules: {
    'import-x/extensions': ['error', 'always', { ignorePackages: true }],
    'import-x/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          `**/demo/**/*.${fileTypes}`,
          `**/test/**/*.${fileTypes}`,
          `**/*.config.${fileTypes}`,
          `**/*.conf.${fileTypes}`,
        ],
      },
    ],
    'import-x/no-unresolved': 'off',
    'import-x/prefer-default-export': 'off',
  },
};

export const importSettingsConfig = {
  settings: {
    'import-x/resolver-next': [
      createNodeResolver({ extensions: ['.js', '.ts'] }),
    ],
  },
};
