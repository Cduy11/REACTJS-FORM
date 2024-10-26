import { combineReducers } from "redux";
import QuanLiFormReducer from "./QuanLiFormReducer";

// store tổng cho ứng dụng
export const rootReducer = combineReducers({
  // nơi chứa các nghiệp vụ (store con)
  QuanLiFormReducer,
});
