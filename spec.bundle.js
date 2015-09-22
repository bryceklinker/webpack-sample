require('./app/entry.js');
require('angular-mocks');

var testContext = require.context('./app', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);