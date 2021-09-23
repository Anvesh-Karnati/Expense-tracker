import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((x) => x.type === title);
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((e) => {
    const category = categories.find((x) => x.type === e.category);
    if (category) {
      category.amount += e.amount;
    }
  });

  const filteredCategories = categories.filter((x) => x.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((x) => x.amount),
        backgroundColor: filteredCategories.map((x) => x.color),
      },
    ],
    labels: filteredCategories.map((x) => x.type),
  };
  return { total, chartData };
};

export default useTransactions;


