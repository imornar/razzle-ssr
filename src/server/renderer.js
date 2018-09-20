import { SheetsRegistry } from 'react-jss/lib/jss';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../App';
import MaterialServerProvider from '../material/material-server-provider';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const renderer = (req, store, context) => {

  const sheetsRegistry = new SheetsRegistry();

  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <Provider store={store}>
        <MaterialServerProvider sheetsRegistry={sheetsRegistry}>
          <App/>
        </MaterialServerProvider>
      </Provider>
    </StaticRouter>
  );

  const css = sheetsRegistry.toString();
  const state = store.getState();

  return `
<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
        ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="roomi-react-root">${markup}</div>
        <script>window.__PRELOADED_STATE__ = ${serialize(state)}</script>
        <style id="jss-server-side">${css}</style>
    </body>
</html>
`
};

export default renderer;
