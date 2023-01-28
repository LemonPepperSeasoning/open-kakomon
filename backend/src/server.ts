import express from 'express'
import swaggerUi from 'swagger-ui-express'
import docs from './docs/index'
import routes from './routes'

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use('/api', routes)

export default app;