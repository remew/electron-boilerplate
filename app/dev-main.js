
const port = process.env.PORT = process.env.PORT || 8008;
process.env.URL = process.env.URL || `http://localhost:${port}/index.html`;

const devServer = require('./dev-server');

devServer.listen(port);

require('./main');

