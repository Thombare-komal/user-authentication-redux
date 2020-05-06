import { RESET_PASSWORD } from "../actions/action-types";

export const reset_password = (state = {}, { type, payload }) => {
  switch (type) {
    case RESET_PASSWORD:
      return payload;

    default:
      return state;
  }
};

