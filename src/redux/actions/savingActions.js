import { addSaving, getSavings } from "../../services/savingServices";
import { validateSavingInput } from "../../utils/savingUtils";
import {
  ADD_SAVING,
  SET_SAVINGS,
  SET_SAVING_ERROR,
  SET_SAVING_LOADING,
  SET_SAVING_INPUT,
} from "../actionConstants";

export const savingInput = (userInput) => ({
  type: SET_SAVING_INPUT,
  payload: userInput,
});

export const addNewSaving = (savingData) => async (dispatch) => {
  try {
    dispatch({ type: SET_SAVING_LOADING });

    const isValidated = validateSavingInput(savingData);

    if (!isValidated) {
      throw new Error("Please select all the required fields");
    } else {
      dispatch({ type: SET_SAVING_ERROR, payload: "" });
    }

    savingData.date = new Date();

    const addedSaving = await addSaving(savingData);

    dispatch({ type: ADD_SAVING, payload: addedSaving });
  } catch (error) {
    dispatch({ type: SET_SAVING_ERROR, payload: error.message });
  }
};

export const getAllSavings = () => async (dispatch) => {
  try {
    dispatch({ type: SET_SAVING_LOADING });

    const expenses = await getSavings();

    dispatch({ type: SET_SAVINGS, payload: expenses });
  } catch (error) {
    dispatch({ type: SET_SAVING_ERROR, payload: error.message });
  }
};
