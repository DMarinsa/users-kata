import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/**/*unit.ts',
  ],
  verbose: true,
};
export default config;
