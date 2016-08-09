const integrationContext = require.context('./integration', true, /\.(js|jsx)$/);
integrationContext.keys().forEach(integrationContext);
const unitContext = require.context('../../source/_patterns/', true, /\.spec\.(js|jsx)$/);
unitContext.keys().forEach(unitContext);
