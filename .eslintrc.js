module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['html'],
  rules: {
    indent: ['error', 2],
    // 세미콜론 사용 여부 (세미콜론을 사용하도록 설정)
    semi: ['error', 'always'],
    // 따옴표 사용 여부 (싱글 따옴표 사용하도록 설정)
    quotes: ['error', 'single'],
    // 함수 선언 시 공백 규칙 (function 키워드 뒤에 공백 적용)
    // 'space-before-function-paren': ['error', 'always'],
  },
};
