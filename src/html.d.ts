export const htmlFilesConfig: {
  files: string[];
  plugins: {
    '@html-eslint': typeof htmlEslint;
  };
  language: string;
  processor: ReturnType<typeof createHtmlProcessor>;
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
import htmlEslint from '@html-eslint/eslint-plugin';
import { createHtmlProcessor } from 'eslint-plugin-html';
