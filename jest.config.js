module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  transform: {
    '\\.([jt]sx?)$': 'babel-jest',
    '\\.(jpg|png|svg)$': '<rootDir>/__mocks__/fileTransformer.js'
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js'
  }
}
