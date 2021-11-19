import app from './app';
import Logger from './config/logger';

const port = 4000;

app.listen(port, () => {
  Logger.info(`${process.env.NODE_ENV} server listening on port ${port}`);
});
