// jest.config.ts

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node'
	// 다른 Jest 구성 옵션을 추가할 수 있습니다.
};

export default config;
