import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',

  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'd.ts', 'tsx', 'json', 'node'],

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },

  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*'],

  coveragePathIgnorePatterns: ['__tests__'],

  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/__tests__/identity-obj-proxy-esm.ts',
  },

  transformIgnorePatterns: ['^.+\\.js$'],
};

export default jestConfig;
