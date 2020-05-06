import { ADD_USER } from "../action-types";
import Axios from "axios";
import { config } from "../../../components/config/default";
const { baseURL } = config;

export const add_user = data => {
  return dispatch => {
    Axios.post(`${baseURL}`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        dispatch({ type: ADD_USER, payload: response });
      })
      .catch(err => {
        console.log("err", err);
      });
  };
};

