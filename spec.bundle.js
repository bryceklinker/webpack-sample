require('angular');
require('angular-mocks');

var testContext = require.context('./app', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);