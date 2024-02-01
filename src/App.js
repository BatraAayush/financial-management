import { Route, Routes } from "react-router";
import "./App.css";
import { Navbar } from "./components/index";
import { Incomes, Expenses, Savings, Reports } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Incomes />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
