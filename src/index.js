export { default as createConfig } from './config.js';
export { default } from './config.js';

export { ignoresConfig } from './ignores.js';
export { baseConfig } from './base.js';
export {
  createImportFilesConfig,
  importFilesRules,
  importSettingsConfig,
} from './import-x.js';
export { litA11yFilesConfig, litA11yFilesRules } from './lit-a11y.js';
export { wcFilesConfig, wcFilesRules } from './wc.js';
export { litFilesConfig, litFilesRules } from './lit.js';
export { createTsFilesConfig, tsFilesRules } from './typescript.js';
export {
  htmlFilesConfig,
  htmlFilesRules,
  eslintPluginHtmlConfig,
} from './html.js';
export { testFilesRules } from './test.js';
export { globalRulesConfig } from './rules.js';
