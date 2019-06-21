const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': isProd ? 'warn' : 'off',
        'no-debugger': isProd ? 'warn' : 'off',
        'no-unused-vars': isProd ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
