import axios from "axios";
import { BASE_URL } from "../redux/actionConstants";

const addSaving = async (savingData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/savings`,
      {
        ...savingData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { addedSaving } = response.data;

    return addedSaving;
  } catch (error) {
    throw error;
  }
};

const getSavings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/savings`);

    const { savings } = response.data;

    return savings;
  } catch (error) {
    throw error;
  }
};

export { addSaving, getSavings };