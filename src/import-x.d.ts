export function createImportFilesConfig(
  tsconfigRootDir?: string,
): import('eslint').Linter.Config[];
export namespace importFilesRules {
  let files: string[];
  let rules: {
    'import-x/extensions': (
      | string
      | {
          ignorePackages: boolean;
        }
    )[];
    'import-x/no-extraneous-dependencies': (
      | string
      | {
          devDependencies: string[];
        }
    )[];
    'import-x/no-unresolved': string;
    'import-x/prefer-default-export': string;
  };
}
export namespace importSettingsConfig {
  let settings: {
    'import-x/resolver-next': import('eslint-plugin-import-x/node-resolver').NodeResolver[];
  };
}
