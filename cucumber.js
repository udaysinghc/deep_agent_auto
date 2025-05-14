export default {
  paths: ['features/**/*.feature'],
  import: ['features/step_definitions/**/*.js', 'features/support/**/*.js'],
  format: [
    'progress',
    'json:reports/cucumber-report.json',
    'html:reports/cucumber-report.html',
    '@cucumber/pretty-formatter'
  ],
  formatOptions: {
    snippetInterface: 'async-now'
  },
  requireModule: ['@playwright/test']
};