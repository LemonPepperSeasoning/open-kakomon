import app from './server'
import logger from './utils/logger'

app.listen(8080, () => logger.info(`App server listening on port 8080!`));
