import reducers from './reducers';
import * as types from './types';

describe('post reducers', () => {
  const initialState = {
    error: null,
    loading: false,
    data: [],
  };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle SEND_REQUEST', () => {
    expect(reducers(undefined, { type: types.SEND_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle REQUEST_SUCCEEDED', () => {
    expect(
      reducers(undefined, {
        type: types.REQUEST_SUCCEEDED,
        payload: { data: [] },
      }),
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });

  it('should handle REQUEST_FAILED', () => {
    const error = new Error();

    expect(
      reducers(undefined, {
        type: types.REQUEST_FAILED,
        error,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error,
    });
  });
});
