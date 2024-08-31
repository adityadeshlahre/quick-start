/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "postcss.config.js",
    "tailwind.config.ts",
    "node_modules",
    ".eslintrc.cjs",
  ],
  parser: "@typescript-eslint/parser",
};
