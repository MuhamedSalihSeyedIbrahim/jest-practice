module.exports = {
  preset: "@shelf/jest-mongodb",
  testEnvironment: "node",
  name: "jest-practice",
  testRegex: "((\\.|/*.)(spec))\\.(js|ts)?$",
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
