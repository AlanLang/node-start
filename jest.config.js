module.exports = {
  testEnvironment: "node",
  roots: ["./src"],
  transform: {
    // 使用 swc 转译 JavaScript 和 TypeScrit
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
