import { connect } from 'mongoose';
import app from './server'
import logger from './utils/logger'
import config from './config/default'


const { MongoClient, ServerApiVersion } = require('mongodb');

connect(config.MONGODB_URI)
    .then(() => logger.info('connected to MongoDB'))
    .catch((err) => logger.error('error connecting to mongodb:', err.message));

app.listen(config.PORT, () => logger.info(`App server listening on port ${config.PORT}!`));

export default app;
