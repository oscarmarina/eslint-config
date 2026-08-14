export const htmlFilesConfig: {
  files: string[];
  plugins: {
    '@html-eslint': typeof htmlEslint;
  };
  languageOptions: {
    parser: typeof htmlEslintParser;
  };
  rules: Record<
    string,
    | 'error'
    | [
        'error',
        {
          inline: string[];
        },
      ]
  >;
};
export namespace htmlFilesRules {
  let files: string[];
  let rules: {
    '@html-eslint/indent': string;
    '@html-eslint/require-closing-tags': string;
    '@html-eslint/no-extra-spacing-tags': string;
    '@html-eslint/attrs-newline': string;
    '@html-eslint/use-baseline': (
      | string
      | {
          available: string;
        }
    )[];
  };
}
export namespace eslintPluginHtmlConfig {
  let files_1: string[];
  export { files_1 as files };
  export namespace plugins {
    export { eslintPluginHtml };
  }
}
import htmlEslint from '@html-eslint/eslint-plugin';
import htmlEslintParser from '@html-eslint/parser';
import eslintPluginHtml from 'eslint-plugin-html';
