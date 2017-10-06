const testsContext = require.context('./spec', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
