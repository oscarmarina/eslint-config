/** @type {import('eslint').Linter.Config} */
export const wcFilesConfig: import('eslint').Linter.Config;
export namespace wcFilesRules {
  let files: string[];
  let rules: {
    'wc/no-constructor-attributes': string;
  };
}
