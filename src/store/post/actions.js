import { SEND_REQUEST, REQUEST_SUCCEEDED, REQUEST_FAILED } from './types';

export const sendRequest = () => ({ type: SEND_REQUEST });
export const requestSucceeded = (data) => ({
  type: REQUEST_SUCCEEDED,
  payload: { data },
});
export const requestFailed = (error) => ({ type: REQUEST_FAILED, error });
