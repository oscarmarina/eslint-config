export namespace globalRulesConfig {
  let rules: {
    'no-unused-expressions': (
      | string
      | {
          allowShortCircuit: boolean;
          allowTernary: boolean;
        }
    )[];
    'no-empty-function': string;
  };
}
