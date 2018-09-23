import { all } from 'redux-saga/effects';
import counterSaga from './counter.saga';

export default function* () {
  yield all([
    counterSaga()
  ]);
}
