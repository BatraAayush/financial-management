import { useSelector } from "react-redux";
import { ExpenseForm, Filters } from "../components/index";

export const Expenses = () => {
  const expenses = useSelector((state) => state.expenseState.expenses);
  const loading = useSelector((state) => state.expenseState.expenseLoading);
  const sortMethod = useSelector(
    (state) => state.expenseState.expenseSortMethod
  );
  const selectedCategory = useSelector(
    (state) => state.expenseState.expenseSelectedCategory
  );

  const applyFilters = (incomes) => {
    let filteredData = [...incomes];

    if (selectedCategory) {
      if (selectedCategory !== "Select Category") {
        filteredData = filteredData.filter(
          ({ category }) => category === selectedCategory
        );
      }
    }

    if (sortMethod) {
      filteredData.sort((a, b) => a.amount - b.amount);
    }

    return filteredData;
  };

  const filteredExpenses = applyFilters(expenses);

  return (
    <div className="p-4 flex flex-col gap-4">
      <ExpenseForm />

      <Filters type="expense" />

      <h2>All Expenses:</h2>

      {loading && <h3 className="self-center">Loading...</h3>}

      {!loading && (
        <div className="w-[100%] overflow-x-scroll">
          <table className="w-[100%]">
            <thead className="bg-gray-200 border-2 border-gray-300">
              <tr>
                <th className="px-2">Date</th>
                <th className="px-2">Category</th>
                <th className="px-2">Description</th>
                <th className="px-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <tr
                  key={expense._id}
                  className="border-2 border-gray-300 text-center"
                >
                  <td className="px-2">
                    {new Date(expense.date).toDateString()}
                  </td>
                  <td className="px-2">{expense.category}</td>
                  <td className="px-2">{expense.description}</td>
                  <td className="px-2">${expense.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
