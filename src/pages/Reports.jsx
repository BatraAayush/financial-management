import { useSelector } from "react-redux";

export const Reports = () => {
  const expenses = useSelector((state) => state.expenseState.expenses);
  const incomes = useSelector((state) => state.incomeState.incomes);

  const totalIncome = incomes.reduce(
    (total, curr) => (total += curr.amount),
    0
  );

  const totalExpense = expenses.reduce(
    (total, curr) => (total += curr.amount),
    0
  );

  const distinctBreakdown = expenses.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = curr.amount;
    } else {
      acc[curr.category] += curr.amount;
    }
    return acc;
  }, {});
  console.log(distinctBreakdown);

  return (
    <div className="p-4 flex flex-col gap-4">
      <h2>Reports:</h2>
      <div className="flex">
        <div className="flex-1">
          <h2 className="my-5">Income Vs Expense</h2>
          <p className="my-2">
            <strong>Total Income:</strong> {totalIncome}
          </p>
          <p className="my-2">
            <strong>Total Expense:</strong> {totalExpense}
          </p>
        </div>
        <div className="flex-1">
          <h2 className="my-5">Expense Breakout</h2>
          {Object.entries(distinctBreakdown).map(([category, amount]) => (
            <p className="my-2" key={category}>
              <strong>{category}:</strong> ${amount}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
