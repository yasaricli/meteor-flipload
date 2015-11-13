Package.describe({
  name: 'yasaricli:flipload',
  version: '0.0.1',
  summary: 'Flipping HTML elements to show a loading indicator easily.',
  git: 'https://github.com/yasaricli/meteor-flipload.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  // files
  api.addFiles([
    'lib/flipload.min.js',
    'lib/flipload.min.css'], 'client');
});
