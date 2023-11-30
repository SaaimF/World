import {NAME_FAILURE, NAME_REQUEST, NAME_SUCCESS} from '../actions/Actt';

const initialState = {
  data: {},
  isloading: false,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_REQUEST:
      return {
        data: action.payload,
        isloading: true,
        isError: false,
      };
    case NAME_SUCCESS:
      return {
        data: action.payload,
        isloading: false,
        isError: false,
      };
    case NAME_FAILURE:
      return {
        data: action.payload,
        isloading: false,
        isError: true,
      };
    default:
      return state;
  }
};
