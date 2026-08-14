import { ignoresConfig } from './ignores.js';
import { baseConfig } from './base.js';
import {
  createImportFilesConfig,
  importFilesRules,
  importSettingsConfig,
} from './import-x.js';
import { litA11yFilesConfig, litA11yFilesRules } from './lit-a11y.js';
import { wcFilesConfig, wcFilesRules } from './wc.js';
import { litFilesConfig, litFilesRules } from './lit.js';
import { createTsFilesConfig, tsFilesRules } from './typescript.js';
import {
  htmlFilesConfig,
  htmlFilesRules,
  eslintPluginHtmlConfig,
} from './html.js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { globalRulesConfig } from './rules.js';
import { testFilesRules } from './test.js';

/**
 * @param {{tsconfigRootDir?: string}} [options]
 * @returns {import('eslint').Linter.Config[]}
 */
export const createConfig = ({ tsconfigRootDir } = {}) => [
  ignoresConfig,
  ...baseConfig,
  ...createImportFilesConfig(tsconfigRootDir),
  importFilesRules,
  importSettingsConfig,
  litA11yFilesConfig,
  litA11yFilesRules,
  wcFilesConfig,
  wcFilesRules,
  litFilesConfig,
  litFilesRules,
  ...createTsFilesConfig(tsconfigRootDir),
  tsFilesRules,
  htmlFilesConfig,
  htmlFilesRules,
  eslintPluginHtmlConfig,
  testFilesRules,
  globalRulesConfig,
  eslintConfigPrettier,
];

export default createConfig;
