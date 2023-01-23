/** @type {import('ts-jest'/dist/types).InitialOptionsTsJest} */

module.exports = {
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.json'
      }
    },
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testMatch: ['**/__test__/*.spec.ts'],
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@apps(.*)$': '<rootDir>/src/apps$1',
      '^@configs(.*)$': '<rootDir>/src/configs$1',
      '^@middlewares(.*)$': '<rootDir>/src/middlewares$1',
      '^@models(.*)$': '<rootDir>/src/models$1',
      '^@bin(.*)$': '<rootDir>/bin$1',
      '^@src(.*)$': '<rootDir>/src$1',
      '^@root(.*)$': '<rootDir>/$1'
    }
  }