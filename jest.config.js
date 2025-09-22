export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/less14'],
  testMatch: ['**/less14/tests/**/*.test.mjs'], // ищем .mjs тесты в less14

  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './reports/html',
        filename: 'report.html',
        expand: true,
        openReport: false,
      },
    ],
  ],
};
