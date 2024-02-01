import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";

const addExpense = async (expenseData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/expenses`,
      {
        ...expenseData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { addedExpense } = response.data;

    return addedExpense;
  } catch (error) {
    throw error;
  }
};

const getExpenses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/expenses`);

    const { expenses } = response.data;

    return expenses;
  } catch (error) {
    throw error;
  }
};

export { addExpense, getExpenses };