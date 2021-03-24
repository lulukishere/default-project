import { runSaga } from 'redux-saga';
import { takeLatest } from 'redux-saga/effects';

import watchPost, { fetchPost } from './saga';
import { requestSucceeded, requestFailed } from './actions';
import { SEND_REQUEST } from './types';

describe('fetchPost generator', () => {
  const post = {
    error: null,
    loading: false,
    data: [],
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should handle if fetch is succeeded', async () => {
    const dispatched = [];

    fetch.mockResponseOnce(JSON.stringify([]));

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ post }),
      },
      fetchPost,
    ).toPromise();

    expect(dispatched).toEqual([requestSucceeded([])]);
  });

  it('should handle if fetch is failed', async () => {
    const dispatched = [];
    const error = new Error('The error message');

    fetch.mockRejectOnce(error);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ post }),
      },
      fetchPost,
    ).toPromise();

    expect(dispatched).toEqual([requestFailed(error)]);
  });
});

describe('watchPost generator', () => {
  const gen = watchPost();

  it('should wait for a action triggered', () => {
    expect(gen.next().value).toEqual(takeLatest(SEND_REQUEST, fetchPost));
  });

  it('should be done', () => {
    expect(gen.next().done).toBeTruthy();
  });
});
