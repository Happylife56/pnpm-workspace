module.exports = {
  // 转义
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '/node_modules/(?!(@storybook/.*\\.vue$))'],
  testMatch: [
    '**/tests/**/?(*.)+(test).[jt]s?(x)',
    '**/tests/**/*spec.[jt]s?(x)',
    '**/__tests__/**/*.spec.js',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
