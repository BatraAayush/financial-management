import { useDispatch, useSelector } from "react-redux";
import { incomeCategories } from "../utils/incomeUtils";
import { useEffect } from "react";
import { incomeInput, addNewIncome } from "../redux/actions/incomeActions";
import { RESET_INCOME } from "../redux/actionConstants";

export const IncomeForm = () => {
  const userInput = useSelector((state) => state.incomeState.incomeInput);
  const error = useSelector((state) => state.incomeState.incomeError);
  const dispatch = useDispatch();

  useEffect(() => {
    return function () {
      dispatch({ type: RESET_INCOME });
    };
  }, [dispatch]);

  const handleAddIncome = () => {
    dispatch(addNewIncome(userInput));
  };

  return (
    <div>
      <h2>Add new Income:</h2>
      <div className="flex gap-2 flex-wrap mt-2">
        <label className="flex flex-col">
          Category:
          <select
            onChange={(e) =>
              dispatch(
                incomeInput({
                  ...userInput,
                  category: e.target.value,
                })
              )
            }
            value={userInput.category}
            className="border-2 outline-2 outline-blue-500 rounded-md h-max self-end px-2"
          >
            {incomeCategories.map((category) => {
              return (
                <option key={category} className="bg-blue-100">
                  {category}
                </option>
              );
            })}
          </select>
        </label>

        <label className="flex flex-col">
          Description:
          <input
            onChange={(e) =>
              dispatch(
                incomeInput({
                  ...userInput,
                  description: e.target.value,
                })
              )
            }
            value={userInput.description}
            type="text"
            placeholder="enter desription"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Amount:
          <input
            onChange={(e) =>
              dispatch(
                incomeInput({
                  ...userInput,
                  amount: e.target.value,
                })
              )
            }
            value={userInput.amount}
            type="number"
            placeholder="enter amount"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <button
          onClick={handleAddIncome}
          className="bg-blue-500 text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end"
        >
          Add
        </button>
      </div>

      {error && <small className="text-red-600">{`* ${error}`}</small>}
    </div>
  );
};
