import {NAME_FAILURE, NAME_REQUEST, NAME_SUCCESS} from './Actt';

export const rrequest = payload => {
  return {
    payload: payload,
    type: NAME_REQUEST,
  };
};

export const ssuccess = payload => {
  return {
    payload: payload,
    type: NAME_SUCCESS,
  };
};

export const ffailure = payload => {
  return {
    payload: payload,
    type: NAME_FAILURE,
  };
};
