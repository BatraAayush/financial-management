import { useDispatch, useSelector } from "react-redux";
import { savingCategories } from "../utils/savingUtils";
import { useEffect } from "react";
import { savingInput, addNewSaving } from "../redux/actions/savingActions";
import { RESET_SAVING } from "../redux/actionConstants";

export const SavingForm = () => {
  const userInput = useSelector((state) => state.savingState.savingInput);
  const error = useSelector((state) => state.savingState.savingError);
  const dispatch = useDispatch();

  useEffect(() => {
    return function () {
      dispatch({ type: RESET_SAVING });
    };
  }, [dispatch]);

  const handleAddExpense = () => {
    dispatch(addNewSaving(userInput));
  };

  return (
    <div>
      <h2>Add new Saving:</h2>
      <div className="flex gap-2 flex-wrap mt-2">
        <label className="flex flex-col">
          Category:
          <select
            onChange={(e) =>
              dispatch(
                savingInput({
                  ...userInput,
                  category: e.target.value,
                })
              )
            }
            value={userInput.category}
            className="border-2 outline-2 outline-black-500 rounded-md h-max self-end px-2"
          >
            {savingCategories.map((category) => {
              return (
                <option key={category} className="bg-black-100">
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
                savingInput({
                  ...userInput,
                  description: e.target.value,
                })
              )
            }
            value={userInput.description}
            type="text"
            placeholder="enter desription"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-black-500"
          />
        </label>

        <label className="flex flex-col">
          Amount:
          <input
            onChange={(e) =>
              dispatch(
                savingInput({
                  ...userInput,
                  amount: e.target.value,
                })
              )
            }
            value={userInput.amount}
            type="number"
            placeholder="enter amount"
            className="border-2 rounded-md max-w-[10rem] px-1 outline-2 outline-black-500"
          />
        </label>

        <button
          onClick={handleAddExpense}
          className="bg-black text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end"
        >
          Add
        </button>
      </div>

      {error && <small className="text-red-600">{`* ${error}`}</small>}
    </div>
  );
};
