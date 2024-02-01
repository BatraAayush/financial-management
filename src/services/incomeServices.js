import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";

const addIncome = async (incomeData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/incomes`,
      {
        ...incomeData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { addedIncome } = response.data;

    return addedIncome;
  } catch (error) {
    throw error;
  }
};

const getIncomes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/incomes`);

    const { incomes } = response.data;

    return incomes;
  } catch (error) {
    throw error;
  }
};

export { addIncome, getIncomes };
