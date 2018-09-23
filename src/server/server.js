import { render } from '@jaredpalmer/after';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { IntlProvider } from 'react-intl';
import { SheetsRegistry } from 'react-jss/lib/jss';
import { Provider } from 'react-redux';
import routes from '../common/routes/routes';
import configureStore from '../common/store/configure-store';
import MaterialServerProvider from '../material/material-server-provider';
import Document from './document';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const context = {};
      const sheetsRegistry = new SheetsRegistry();
      const store = configureStore();

      const customRenderer = (node) => {
        const Component = (
          <IntlProvider locale="en">
            <Provider store={store}>
              <MaterialServerProvider sheetsRegistry={sheetsRegistry}>
                {node}
              </MaterialServerProvider>
            </Provider>
          </IntlProvider>
        );
        const html = renderToString(Component);
        const jssStyles = sheetsRegistry.toString();
        const serverState = store.getState();
        return { html, serverState, jssStyles };
      };

      const html = await render({
        req,
        res,
        routes,
        assets,
        isServer: true,
        document: Document,
        customRenderer,
      });

      if (context.url) {
        res.redirect(context.url);
      } else {
        res.status(200).send(html);
      }
    } catch (e) {
      console.log('error on server side rendering = ', e);
      res.json(e)
    }
  });

export default server;
