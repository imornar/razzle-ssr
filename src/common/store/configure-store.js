import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';

const middleWares = [];

const REDUX_TOOLS = typeof window !== 'undefined' && process.NODE_ENV !== 'production';
const composeEnhancers = REDUX_TOOLS ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose : compose;
const enchanter = composeEnhancers(applyMiddleware(...middleWares));

const configureStore = preLoadedState => {
  const store = createStore(
    rootReducer,
    preLoadedState,
    enchanter
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
