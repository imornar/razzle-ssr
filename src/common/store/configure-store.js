import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const REDUX_TOOLS = typeof window !== 'undefined' && process.NODE_ENV !== 'production';
const composeEnhancers = REDUX_TOOLS ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose : compose;
const enchanter = composeEnhancers(applyMiddleware(...middleWares));

const configureStore = preLoadedState => {
  const store = createStore(
    rootReducer,
    preLoadedState,
    enchanter
  );
  sagaMiddleware.run(sagas);
  // store.runSaga = sagaMiddleware.run;
  // store.close = () => store.dispatch(END);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
