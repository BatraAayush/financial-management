import {
  ADD_EXPENSE,
  SET_EXPENSES,
  SET_EXPENSE_ERROR,
  SET_EXPENSE_LOADING,
  SET_EXPENSE_INPUT,
  RESET_EXPENSE,
  SET_EXPENSE_FILTERS,
  SET_EXPENSE_SORT,
} from "../actionConstants";

const initialState = {
  expenses: [],
  expenseInput: {
    description: "",
    category: "",
    amount: 0,
  },
  expenseSortMethod: "",
  expenseSelectedCategory: "",
  expenseLoading: false,
  expenseError: "",
};

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPENSE_INPUT:
      return { ...state, expenseInput: action.payload };
    case SET_EXPENSES:
      return {
        ...state,
        expenses: [...action.payload],
        expenseLoading: false,
        expenseError: "",
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        expenseInput: {
          description: "",
          category: "",
          amount: 0,
        },
        expenseLoading: false,
      };
    case SET_EXPENSE_FILTERS:
      const selectedCategory = action.payload;

      return { ...state, expenseSelectedCategory: selectedCategory };
    case SET_EXPENSE_SORT:
      return { ...state, expenseSortMethod: action.payload };
    case SET_EXPENSE_LOADING:
      return { ...state, expenseLoading: true };
    case SET_EXPENSE_ERROR:
      return {
        ...state,
        expenseError: action.payload,
        expenseLoading: false,
      };
    case RESET_EXPENSE:
      return {
        ...state,
        expenseInput: {
          description: "",
          category: "",
          amount: 0,
        },
        expenseError: "",
      };
    default:
      return { ...state };
  }
};
