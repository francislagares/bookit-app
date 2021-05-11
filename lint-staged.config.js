module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'yarn type-check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
  // Run Stylelint on changes to CSS/SCSS/LESS files
  '**/*.(css|scss|sass|less|tsx|ts|js)': (filenames) =>
    `yarn stylelint ${filenames.join(' ')}`,
};
