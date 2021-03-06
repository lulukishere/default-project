import { call, put, takeLatest } from 'redux-saga/effects';

import { requestSucceeded, requestFailed } from './actions';
import { SEND_REQUEST } from './types';

export function* fetchPost() {
  try {
    const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const data = yield call([res, 'json']);
    yield put(requestSucceeded(data));
  } catch (e) {
    yield put(requestFailed(e));
  }
}

export default function* watchPost() {
  yield takeLatest(SEND_REQUEST, fetchPost);
}
