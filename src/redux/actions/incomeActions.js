import { addIncome, getIncomes } from "../../services/incomeService";
import { validateIncomeInput } from "../../utils/incomeUtils";
import {
  ADD_INCOME,
  SET_INCOMES,
  SET_INCOME_ERROR,
  SET_INCOME_LOADING,
  SET_INCOME_INPUT,
} from "../actionConstants";

export const incomeInput = (userInput) => ({
  type: SET_INCOME_INPUT,
  payload: userInput,
});

export const addNewIncome = (incomeData) => async (dispatch) => {
  try {
    dispatch({ type: SET_INCOME_LOADING });

    const isValidated = validateIncomeInput(incomeData);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_INCOME_ERROR, payload: "" });
    }

    incomeData.date = new Date();

    const addedIncome = await addIncome(incomeData);

    dispatch({ type: ADD_INCOME, payload: addedIncome });
  } catch (error) {
    dispatch({ type: SET_INCOME_ERROR, payload: error.message });
  }
};

export const getAllIncomes = () => async (dispatch) => {
  try {
    dispatch({ type: SET_INCOME_LOADING });

    const incomes = await getIncomes();

    dispatch({ type: SET_INCOMES, payload: incomes });
  } catch (error) {
    dispatch({ type: SET_INCOME_ERROR, payload: error.message });
  }
};
