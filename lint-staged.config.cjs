module.exports = {
  'src/**/*.{ts,js,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  'src/**/*.ts?(x)': () => 'pnpm check-types',
};
