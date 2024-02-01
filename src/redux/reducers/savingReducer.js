import {
  ADD_SAVING,
  SET_SAVINGS,
  SET_SAVING_ERROR,
  SET_SAVING_LOADING,
  SET_SAVING_INPUT,
  RESET_SAVING,
  SET_SAVING_FILTERS,
  SET_SAVING_SORT,
} from "../actionConstants";

const initialState = {
  savings: [],
  savingInput: {
    description: "",
    category: "",
    amount: 0,
  },
  savingSortMethod: "",
  savingSelectedCategory: "",
  savingLoading: false,
  savingError: "",
};

export const savingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAVING_INPUT:
      return { ...state, savingInput: action.payload };
    case SET_SAVINGS:
      return {
        ...state,
        savings: [...action.payload],
        savingLoading: false,
        savingError: "",
      };
    case ADD_SAVING:
      return {
        ...state,
        savings: [...state.savings, action.payload],
        savingInput: {
          description: "",
          category: "",
          amount: 0,
        },
        savingLoading: false,
      };
    case SET_SAVING_FILTERS:
      const selectedCategory = action.payload;

      return { ...state, savingSelectedCategory: selectedCategory };
    case SET_SAVING_SORT:
      return { ...state, savingSortMethod: action.payload };
    case SET_SAVING_LOADING:
      return { ...state, savingLoading: true };
    case SET_SAVING_ERROR:
      return {
        ...state,
        savingError: action.payload,
        savingLoading: false,
      };
    case RESET_SAVING:
      return {
        ...state,
        savingInput: {
          description: "",
          category: "",
          amount: 0,
        },
        savingError: "",
      };
    default:
      return { ...state };
  }
};
