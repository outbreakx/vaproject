const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');


const config = {
  verbose: true,
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js"
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' })
};

module.exports = config;
