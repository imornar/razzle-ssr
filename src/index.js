import express from 'express';
import app from './server/server';

if (module.hot) {
  module.hot.accept('./server/server', () => {
    console.log('🔁  Server-side HMR Reloading...');
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`🚀 Started on port ${port}`);
  });
