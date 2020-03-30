module.exports = {
  extends: [
    '@nuxtjs/stylelint-config'
  ],
  // add your custom rules here
  // https://stylelint.io/user-guide/configuration
  rules: {
    indentation: 2,
    'block-no-empty': true,
    'color-no-hex': true,
    'color-named': 'never',
    'number-max-precision': 2,
    'number-leading-zero': 0,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'no-missing-end-of-source-newline': true,
    'no-eol-whitespace': true,
    'unicode-bom': 'never'
  }
}
