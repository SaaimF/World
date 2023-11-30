import axios from "axios";
import { failure, request, success } from "../actions/Signa";
import { Nfailure, Nrequest, Nsuccess } from "../actions/Nsig";



export const getUserData = async (dispatch:any, uri:any) => {
    await dispatch(request({uri:uri}));
    await axios
      .get(uri)
      .then(data => {
        console.log('check user data', data);
        dispatch(success(data.data));
      })
      .catch(err => {
        dispatch(failure(err));
      });
  };

  
export const Fname = async (dispatch:any, uri:any) => {
  await dispatch(Nrequest({uri:uri}));
  await axios
    .get(uri)
    .then(data => {
      console.log('check user data', data);
      dispatch(Nsuccess(data.data));
    })
    .catch(err => {
      dispatch(Nfailure(err));
    });
};