import { nextjs } from "@next/eslint-config-next";

/** @type {import('eslint').Linter.Config} */
export default [
  ...nextjs,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
