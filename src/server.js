const { app } = require('./app');
const { NODE_ENV, PORT } = require('./environment');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`WARNING: app is running in ${NODE_ENV.toUpperCase()} mode on port ${PORT}`);
});
