/** @type {import('@jest/types').Config.InitialOptions} */
import 'react-native';

module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.test.js'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  preset: "react-native",
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(firebase)/)",
    "/Users/yukiangmacpro/Desktop/grass/node_modules/firebase/app/dist/esm/index.esm.js"
  ],
};
