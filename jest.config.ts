module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: './tsconfig.jest.json', // Point Jest to the separate tsconfig
        }],
        '^.+\\.jsx?$': ['babel-jest', { configFile: './babel-jest.config.js' }],
    },
    transformIgnorePatterns: [
        '/node_modules/(?!your-node-module-to-transform|other-modules-to-transform).*/',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/app/$1',
    },
}
