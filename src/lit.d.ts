/** @type {import('eslint').Linter.Config} */
export const litFilesConfig: import('eslint').Linter.Config;
export namespace litFilesRules {
  let files: string[];
  let rules: {
    'lit/lifecycle-super': string;
    'lit/no-native-attributes': string;
    'lit/no-useless-template-literals': string;
    'lit/binding-positions': string;
    'lit/no-invalid-html': string;
  };
}
