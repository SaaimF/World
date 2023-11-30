import {
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
} from '../actions/Actt';

const initialState = {
  data: {},
  isloading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_USER_REQUEST:
      return {
        data: action.payload,
        isloading: true,
        isError: false,
      };
    case SIGN_IN_USER_SUCCESS:
      return {
        data: action.payload,
        isloading: false,
        isError: false,
      };
    case SIGN_IN_USER_FAILURE:
      return {
        data: action.payload,
        isloading: false,
        isError: true,
      };
    default:
      return state;
  }
};
