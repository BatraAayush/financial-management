import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="px-4 py-3 flex justify-between flex-wrap border-solid border-4 border-black-600 rounded-b-md">
      <h1 className={`black`}>
        <NavLink to="/">Financial Management</NavLink>
      </h1>

      <ul className="flex items-center gap-2 md:gap-4 flex-wrap font-semibold">
        <li className={`grey`}>
          <NavLink to="/">Incomes</NavLink>
        </li>
        <li className={`grey`}>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
        <li className={`grey`}>
          <NavLink to="/savings">Savings</NavLink>
        </li>
        <li className={`grey`}>
          <NavLink to="/reports">Reports</NavLink>
        </li>
      </ul>
    </nav>
  );
};
