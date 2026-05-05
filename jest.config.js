export default {
  testEnvironment: "node",
  verbose: true,
  collectCoverageFrom: [
    "backend/*/.js",
    "frontend/*/.js",
    "!*/node_modules/*",
    "!*/dist/*",
  ],
  coverageDirectory: "coverage",
};
