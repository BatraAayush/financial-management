import {
  ADD_INCOME,
  SET_INCOMES,
  SET_INCOME_ERROR,
  SET_INCOME_LOADING,
  SET_INCOME_INPUT,
  RESET_INCOME,
  SET_INCOME_FILTERS,
  SET_INCOME_SORT,
} from "../actionConstants";

const initialState = {
  incomes: [],
  incomeInput: {
    description: "",
    category: "",
    amount: 0,
  },
  incomeSortMethod: "",
  incomeSelectedCategory: "",
  incomeLoading: false,
  incomeError: "",
};

export const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCOME_INPUT:
      return { ...state, incomeInput: action.payload };
    case SET_INCOMES:
      return {
        ...state,
        incomes: [...action.payload],
        incomeLoading: false,
        incomeError: "",
      };
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
        incomeInput: {
          description: "",
          category: "",
          amount: 0,
        },
        incomeLoading: false,
      };
    case SET_INCOME_FILTERS:
      const selectedCategory = action.payload;

      return { ...state, incomeSelectedCategory: selectedCategory };
    case SET_INCOME_SORT:
      return { ...state, incomeSortMethod: action.payload };
    case SET_INCOME_LOADING:
      return { ...state, incomeLoading: true };
    case SET_INCOME_ERROR:
      return {
        ...state,
        incomeError: action.payload,
        incomeLoading: false,
      };
    case RESET_INCOME:
      return {
        ...state,
        incomeInput: {
          description: "",
          category: "",
          amount: 0,
        },
        incomeError: "",
      };
    default:
      return { ...state };
  }
};
