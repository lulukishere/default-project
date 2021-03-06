import { runSaga } from 'redux-saga';

import { fetchPost } from './saga';
import { requestSucceeded, requestFailed } from './actions';

describe('post saga', () => {
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
