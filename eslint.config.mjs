// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  // ← игнорируем учебные папки целиком
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'les1-7/**',
      'les7/**',
      'less7/**',
      'les11/**',
      'less11/**',
      'les12/**',
    ],
  },

  js.configs.recommended,

  // общие настройки
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.node },
    },
    rules: {
      // мягче к временам неиспользуемым переменным
      'no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
    },
  },

  // тесты (Jest + Node)
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: { ...globals.jest, ...globals.node },
    },
    rules: {
      // при желании можно ослабить для тестов:
      // 'no-undef': 'off',
      // 'no-unused-vars': 'off',
    },
  },
];
