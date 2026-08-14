# @blockquote/eslint-config

Shared ESLint flat config for blockquote-web-components (Lit / Web Components).

## Requirements

- Node.js >= 20.11 (for `import.meta.dirname`)
- ESLint >= 9 (flat config)

## Install

```sh
npm install --save-dev @blockquote/eslint-config
```

## Usage

Create an `eslint.config.js` at the project root:

```js
import { defineConfig } from 'eslint/config';
import createConfig from '@blockquote/eslint-config';

export default defineConfig(createConfig());
```

That's it. When linting from the project root, `tsconfigRootDir` is not needed: it defaults to the current working directory.

### With `import.meta.dirname`

When the config lives in a different directory than the one you lint from (monorepos, subdirectories, CI), pass the config directory explicitly:

```js
import { defineConfig } from 'eslint/config';
import createConfig from '@blockquote/eslint-config';

export default defineConfig(
  createConfig({ tsconfigRootDir: import.meta.dirname }),
);
```

`import.meta.dirname` is the directory of `eslint.config.js` (ESM, Node.js >= 20.11). When the option is omitted, `tsconfigRootDir` is not added to the config and ESLint uses `process.cwd()`.

## What's included

The preset builds on ESLint's recommended configs and adds:

- `@eslint/js` recommended rules
- `typescript-eslint` strict + stylistic rules (type-aware, via `projectService`)
- `eslint-plugin-import-x` (resolution, extensions, extraneous dependencies)
- `eslint-plugin-lit`, `eslint-plugin-lit-a11y`, `eslint-plugin-wc`
- `@html-eslint` rules
- `globals` for browser, ES2023 and mocha
- `eslint-config-prettier` (disable style rules, keep formatting to Prettier)

## Advanced

The individual pieces are also available as named exports and subpaths for fine-grained composition:

```js
import createConfig, {
  createImportFilesConfig,
  createTsFilesConfig,
  baseConfig,
  testFilesRules,
} from '@blockquote/eslint-config';
```

```sh
@blockquote/eslint-config/ignores
@blockquote/eslint-config/base
@blockquote/eslint-config/import-x
@blockquote/eslint-config/typescript
@blockquote/eslint-config/html
@blockquote/eslint-config/lit
@blockquote/eslint-config/lit-a11y
@blockquote/eslint-config/wc
@blockquote/eslint-config/rules
@blockquote/eslint-config/test
```

## License

MIT
