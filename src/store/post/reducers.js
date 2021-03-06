import { SEND_REQUEST, REQUEST_SUCCEEDED, REQUEST_FAILED } from './types';

const initialState = {
  error: null,
  loading: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
