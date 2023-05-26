module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: [2, 'always'], // 强制语句分号结尾
    quotes: [1, 'single', 'avoid-escape'], // 引号风格
    'comma-style': [2, 'last'], // 逗号风格
    'vue/multi-word-component-names': 'off'
  }
};
