import express from 'express';
import renderer from './renderer';
import configureStore from '../common/store/configure-store';

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const store = configureStore({ count: 19 });
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(renderer(req, store, context));
    }
  });

export default server;
