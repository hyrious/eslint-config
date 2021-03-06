module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    'es2021': true,
    'shared-node-browser': true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'curly': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'func-call-spacing': 'error',
    'generator-star-spacing': ['error', { before: true, after: true }],
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: true,
      ignoreComments: false,
      ignoredNodes: ['TemplateLiteral *'],
    }],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['error', 100, { ignoreComments: false }],
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'error',
    'no-mixed-operators': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-negated-in-lhs': 'error',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-return-assign': 'off',
    'no-self-assign': 'off',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'off',
    'no-throw-literal': 'off',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    }],
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'below'],
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'one-var': ['error', { initialized: 'never' }],
    'operator-linebreak': 'off',
    'padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-promise-reject-errors': 'error',
    'quotes': ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'rest-spread-spacing': 'error',
    'semi': ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['*package', '!', '/', ',', '='],
      },
      block: {
        balanced: true,
        markers: ['*package', '!', ',', ':', '::', 'flow-include'],
        exceptions: ['*'],
      },
    }],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': ['error', 'both'],
    'yoda': 'error',
  },
};
