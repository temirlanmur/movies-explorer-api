const { app, NODE_ENV, PORT } = require('./app');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App is running in ${NODE_ENV.toUpperCase()} mode on port ${PORT}`);
});
