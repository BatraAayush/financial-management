export const savingCategories = [
  "Select Category",
  "Emergency Fund",
  "Retirement",
  "Medical",
  "Education",
  "Home Purchase",
  "Car Purchase",
  "Long Term",
  "Vacation",
  "Wedding",
];

export const validateSavingInput = (savingData) => {
  const { description, amount, category } = savingData;

  if (!description || !amount || !category || category === "Select Category") {
    return false;
  }

  return true;
};
