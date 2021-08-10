import { useState } from "react";

import "./Expenses.css";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterSelectedYear, setFilterSelectedYear] = useState("2019");

  const onYearSelectHandler = (selectedYear) => {
    setFilterSelectedYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterSelectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterSelectedYear}
          onYearSelect={onYearSelectHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
