export default {
  '*': 'prettier --ignore-unknown --write',
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
}