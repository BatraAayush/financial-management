import { NavLink } from "react-router-dom";

const gradientColor =
  "bg-gradient-to-r from-blue-600 to-violet-500 text-transparent bg-clip-text";

const gradientColorOnHover =
  "hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-500 hover:text-transparent hover:bg-clip-text";

export const Navbar = () => {
  return (
    <nav className="px-4 py-3 flex justify-between flex-wrap shadow-md rounded-b-md">
      <h1 className={`${gradientColor}`}>
        <NavLink to="/">Financial Management</NavLink>
      </h1>

      <ul className="flex items-center gap-2 md:gap-4 flex-wrap font-semibold">
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/">Incomes</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/expenses">Expenses</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/savings">Savings</NavLink>
        </li>
        <li className={`${gradientColorOnHover}`}>
          <NavLink to="/reports">Reports</NavLink>
        </li>
      </ul>
    </nav>
  );
};
