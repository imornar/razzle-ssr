import { After, ensureReady } from '@jaredpalmer/after';
import React from 'react';
import { hydrate } from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Layout from './layout';
import routes from './common/routes/routes';
import configureStore from './common/store/configure-store';
import MaterialClientProvider from './material/material-client-provider';

const store = configureStore(window.__PRELOADED_STATE__);

ensureReady(routes).then(data => {
  return hydrate(
    <IntlProvider locale="en">
      <BrowserRouter>
        <Provider store={store}>
          <MaterialClientProvider>
            <Layout>
              <After data={data} routes={routes}/>
            </Layout>
          </MaterialClientProvider>
        </Provider>
      </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root'),
  );
});

// this updates reducer's hot reloading and throws console warning.
// TODO: find better solution for HOT reload
if (module.hot) {
  module.hot.accept();
}
