import * as actions from './actions';
import * as types from './types';

describe('post actions', () => {
  it('should create an action to initialize a request', () => {
    expect(actions.sendRequest()).toEqual({ type: types.SEND_REQUEST });
  });

  it('should create an action to save data', () => {
    expect(actions.requestSucceeded([])).toEqual({
      type: types.REQUEST_SUCCEEDED,
      payload: { data: [] },
    });
  });

  it('should create an action to throw a error', () => {
    const error = new Error();

    expect(actions.requestFailed(error)).toEqual({
      type: types.REQUEST_FAILED,
      error,
    });
  });
});
