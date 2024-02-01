import { useDispatch, useSelector } from "react-redux";
import { Filters, IncomeForm } from "../components/index";
import { useEffect } from "react";
import { getAllIncomes } from "../redux/actions/incomeActions";
import { getAllExpenses } from "../redux/actions/expenseActions";
import { getAllSavings } from "../redux/actions/savingActions";

export const Incomes = () => {
  const incomes = useSelector((state) => state.incomeState.incomes);
  const expenses = useSelector((state) => state.expenseState.expenses);
  const savings = useSelector((state) => state.savingState.savings);
  const loading = useSelector((state) => state.incomeState.incomeLoading);
  const sortMethod = useSelector((state) => state.incomeState.incomeSortMethod);
  const selectedCategory = useSelector(
    (state) => state.incomeState.incomeSelectedCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (incomes.length <= 0 && expenses.length <= 0 && savings.length <= 0) {
      dispatch(getAllIncomes());
      dispatch(getAllExpenses());
      dispatch(getAllSavings());
    }
  }, [dispatch, incomes.length, expenses.length, savings.length]);

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

  const filteredIncomes = applyFilters(incomes);

  return (
    <div className="p-4 flex flex-col gap-4">
      <IncomeForm />

      <Filters type="income" />

      <h2>All Incomes:</h2>

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
              {filteredIncomes.map((income) => (
                <tr
                  key={income._id}
                  className="border-2 border-gray-300 text-center"
                >
                  <td className="px-2">
                    {new Date(income.date).toDateString()}
                  </td>
                  <td className="px-2">{income.category}</td>
                  <td className="px-2">{income.description}</td>
                  <td className="px-2">${income.amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
