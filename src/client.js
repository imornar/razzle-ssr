import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './common/store/configure-store';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('roomi-react-root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    hydrate(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
      document.getElementById('roomi-react-root')
    );
  });
}
