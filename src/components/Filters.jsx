import { incomeCategories } from "../utils/incomeUtils";
import { expenseCategories } from "../utils/expenseUtils";
import { savingCategories } from "../utils/savingUtils";
import {
  SET_INCOME_FILTERS,
  SET_INCOME_SORT,
  SET_EXPENSE_FILTERS,
  SET_EXPENSE_SORT,
  SET_SAVING_FILTERS,
  SET_SAVING_SORT,
} from "../redux/actionConstants";
import { useDispatch, useSelector } from "react-redux";

export const Filters = ({ type = "income" }) => {
  const incomeSortMethod = useSelector(
    (state) => state.incomeState.incomeSortMethod
  );
  const incomeSelectedCategory = useSelector(
    (state) => state.incomeState.incomeSelectedCategory
  );
  const expenseSortMethod = useSelector(
    (state) => state.expenseState.expenseSortMethod
  );
  const expenseSelectedCategory = useSelector(
    (state) => state.expenseState.expenseSelectedCategory
  );
  const savingSortMethod = useSelector(
    (state) => state.savingState.savingSortMethod
  );
  const savingSelectedCategory = useSelector(
    (state) => state.savingState.savingSelectedCategory
  );
  const dispatch = useDispatch();

  const getFilterData = () => {
    switch (type) {
      case "income":
        return {
          categories: incomeCategories,
          sortType: SET_INCOME_SORT,
          filterType: SET_INCOME_FILTERS,
          sortMethod: incomeSortMethod,
          selectedCategory: incomeSelectedCategory,
        };
      case "expense":
        return {
          categories: expenseCategories,
          sortType: SET_EXPENSE_SORT,
          filterType: SET_EXPENSE_FILTERS,
          sortMethod: expenseSortMethod,
          selectedCategory: expenseSelectedCategory,
        };
      case "saving":
        return {
          categories: savingCategories,
          sortType: SET_SAVING_SORT,
          filterType: SET_SAVING_FILTERS,
          sortMethod: savingSortMethod,
          selectedCategory: savingSelectedCategory,
        };
      default:
        return {};
    }
  };

  const filterData = getFilterData();

  return (
    <div>
      <h2>Filters:</h2>

      <div className="flex gap-4 items-center flex-wrap mt-2">
        <label>
          <input
            onChange={(e) =>
              dispatch({
                type: filterData.sortType,
                payload:
                  filterData.sortMethod === "amount" ? "" : e.target.value,
              })
            }
            checked={filterData.sortMethod === "amount"}
            type="checkbox"
            value="amount"
            className="mr-1"
          />
          Amount
        </label>

        <label>
          Category:
          <select
            onChange={(e) =>
              dispatch({ type: filterData.filterType, payload: e.target.value })
            }
            value={filterData.selectedCategory}
            className="border-2 outline-2 outline-blue-500 rounded-md h-max self-end px-2 ml-2"
          >
            {filterData.categories.map((category) => {
              return (
                <option key={category} className="bg-blue-100">
                  {category}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
};
