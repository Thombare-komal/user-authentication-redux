import { combineReducers } from "redux";
import { add_user } from "../reducer/userRegisterReducer";
import {reset_password} from "../reducer/resetPasswordReducer";

const userReducer = combineReducers({
  userRegisterResponse: add_user,
  resetPasswordResponse : reset_password
 
});
export default userReducer;
