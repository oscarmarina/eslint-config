export function createTsFilesConfig(
  tsconfigRootDir?: string,
): import('eslint').Linter.Config[];
export namespace tsFilesRules {
  let files: string[];
  let rules: {
    '@typescript-eslint/no-floating-promises': string;
    '@typescript-eslint/ban-types': string;
    '@typescript-eslint/explicit-function-return-type': string;
    '@typescript-eslint/explicit-module-boundary-types': string;
    '@typescript-eslint/no-empty-function': string;
    '@typescript-eslint/no-non-null-assertion': string;
    '@typescript-eslint/class-literal-property-style': string;
    '@typescript-eslint/no-unused-expressions': string;
  };
}
