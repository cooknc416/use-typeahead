export default {
  clearMocks: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./test-utils/testSetup.ts'],
  coverageDirectory: './coverage/',
  collectCoverage: true
};