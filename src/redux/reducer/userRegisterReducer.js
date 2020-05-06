import { ADD_USER } from "../actions/action-types";

export const add_user = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return payload;

    default:
      return state;
  }
};

