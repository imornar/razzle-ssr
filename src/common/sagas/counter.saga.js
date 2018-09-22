import { takeLatest, call, put } from 'redux-saga/effects';
import { setAction } from '../actions/counter-actions';
import { GET } from '../types/counter-types';

const apiCall = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(99);
  }, 2000);
});

function* counterSaga() {
  const count = yield call(apiCall);
  yield put(setAction(count));
}

export default function* () {
  yield takeLatest(GET, counterSaga)
}
