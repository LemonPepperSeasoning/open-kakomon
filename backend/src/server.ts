const express = require("express");

const app = express();

const swaggerUi = require("swagger-ui-express");
const docs = require('./docs');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

export default app;