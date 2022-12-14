module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  transform: {
    '\\.([jt]sx?)$': 'babel-jest'
  }
}
