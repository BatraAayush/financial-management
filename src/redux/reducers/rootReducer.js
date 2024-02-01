import { combineReducers } from "redux";
import { expenseReducer } from "./expenseReducer";
import { incomeReducer } from "./incomeReducer";
import { savingReducer } from "./savingReducer";

export const rootReducer = combineReducers({
  expenseState: expenseReducer,
  incomeState: incomeReducer,
  savingState: savingReducer,
});
