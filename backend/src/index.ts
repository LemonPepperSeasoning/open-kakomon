import app from './server'
import logger from './utils/logger'
import defaultConfig from './config/default'

app.listen(defaultConfig.PORT, () => logger.info(`App server listening on port ${defaultConfig.PORT}!`));
