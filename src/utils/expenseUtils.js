export const expenseCategories = [
  "Select Category",
  "Rent",
  "Transportation",
  "Utilities",
  "Entertainment",
  "Home Insurance",
  "Life Insurance",
  "Health Insurance",
  "Car Insurance",
  "Housing",
  "Groceries",
  "Dining Out",
  "Travel",
  "Others",
];

export const validateExpenseInput = (expenseData) => {
  const { description, amount, category } = expenseData;

  if (!description || !amount || !category || category === "Select Category") {
    return false;
  }

  return true;
};
