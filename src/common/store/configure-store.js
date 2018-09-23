import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const REDUX_TOOLS = typeof window !== 'undefined' && process.NODE_ENV !== 'production';
const composeEnhancers = REDUX_TOOLS ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose : compose;
const enchanter = composeEnhancers(applyMiddleware(...middleWares));

export let store; // TODO find better way to access store inside component's getInitialProps
const configureStore = preLoadedState => {
  store = createStore(
    rootReducer,
    preLoadedState,
    enchanter
  );

  store.runSaga = () => {
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.resolveSagas = async () => {
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    store.runSaga();
    tasks.map(store.dispatch);
    if (isServer) {
      await store.resolveSagas();
    }
  };

  store.runSaga();

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
