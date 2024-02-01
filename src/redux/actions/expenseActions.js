import { addExpense, getExpenses } from "../../services/expenseServices";
import { validateExpenseInput } from "../../utils/expenseUtils";
import {
  ADD_EXPENSE,
  SET_EXPENSES,
  SET_EXPENSE_ERROR,
  SET_EXPENSE_LOADING,
  SET_EXPENSE_INPUT,
} from "../actionConstants";

export const expenseInput = (userInput) => ({
  type: SET_EXPENSE_INPUT,
  payload: userInput,
});

export const addNewExpense = (expenseData) => async (dispatch) => {
  try {
    dispatch({ type: SET_EXPENSE_LOADING });

    const isValidated = validateExpenseInput(expenseData);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_EXPENSE_ERROR, payload: "" });
    }

    expenseData.date = new Date();

    const addedExpense = await addExpense(expenseData);

    dispatch({ type: ADD_EXPENSE, payload: addedExpense });
  } catch (error) {
    dispatch({ type: SET_EXPENSE_ERROR, payload: error.message });
  }
};

export const getAllExpenses = () => async (dispatch) => {
  try {
    dispatch({ type: SET_EXPENSE_LOADING });

    const expenses = await getExpenses();

    dispatch({ type: SET_EXPENSES, payload: expenses });
  } catch (error) {
    dispatch({ type: SET_EXPENSE_ERROR, payload: error.message });
  }
};
