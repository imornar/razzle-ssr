import { After, ensureReady } from '@jaredpalmer/after';
import React from 'react';
import { hydrate } from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import Router from 'react-router-dom/Router';
import Layout from './layout';
import routes from './common/routes/routes';
import configureStore from './common/store/configure-store';
import MaterialClientProvider from './material/material-client-provider';
import history from './common/history';

const store = configureStore(window.__PRELOADED_STATE__);

const reHydrate = () => ensureReady(routes).then(data => hydrate(
  <IntlProvider locale="en">
    <Router history={history}>
      <Provider store={store}>
        <MaterialClientProvider>
          <Layout>
            <After data={data} routes={routes}/>
          </Layout>
        </MaterialClientProvider>
      </Provider>
    </Router>
  </IntlProvider>,
  document.getElementById('root'),
));
reHydrate();

if (module.hot) {
  module.hot.accept(['./layout','./common/routes/routes'], reHydrate);
  console.info('✅  Client-side HMR Enabled!');
}
