import express from 'express';
import renderer from './renderer';

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(renderer(req, context));
    }
  });

export default server;
