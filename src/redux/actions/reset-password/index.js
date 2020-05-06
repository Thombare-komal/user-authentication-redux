import { RESET_PASSWORD } from "../action-types";
import Axios from "axios";
import { config } from "../../../components/config/default";
const { baseURL } = config;

export const reset_password =(data,id) => {
  return dispatch => {
    Axios.patch(`${baseURL}/${id}`, data , {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        dispatch({ type: RESET_PASSWORD, payload: response });
      })
      .catch(err => {
        console.log("err", err);
      });
  };
};

