import express from 'express'
import swaggerUi from 'swagger-ui-express'
import docs from './docs/index'

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

export default app;