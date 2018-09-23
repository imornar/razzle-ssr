import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { errAction, getAction, setAction } from '../actions/counter-actions';
import { fetchedCountSelector } from '../selectors/counter-selector';
import { INIT } from '../types/counter-types';

const apiCall = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(99);
  }, 2000);
});

const delay = () => new Promise((resolve) => setTimeout(() => resolve(), 6000));

function* counterSaga() {
  try {
    const fetched = yield select(fetchedCountSelector);
    if (fetched) return;
    yield put(getAction());
    console.log('****** making counter call ******');
    const count = yield call(apiCall);
    yield put(setAction(count));
    console.log('****** parent over ******');
  } catch (e) {
    yield put(errAction(e))
  }
}

function* testSaga() {
  console.log('****** child start ******');
  yield call(delay);
  console.log('****** over child ******');
}

export default function* () {
  yield all([
    takeLatest(INIT, counterSaga),
    takeLatest('children', testSaga)
  ])
}
