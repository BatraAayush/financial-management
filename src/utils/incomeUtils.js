export const incomeCategories = [
  "Select Category",
  "Investment",
  "Partnership",
  "Rental Income",
  "Capital Gain",
  "Commission",
  "Dividend",
  "Gratuity",
  "Interest",
  "Freelance Income",
  "Pension",
  "Salary",
];

export const validateIncomeInput = (incomeData) => {
  const { description, amount, category } = incomeData;

  if (!description || !amount || !category || category === "Select Category") {
    return false;
  }

  return true;
};
