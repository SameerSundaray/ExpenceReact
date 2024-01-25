
import React from 'react';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'el2',
      title: 'Shampoo',
      amount: 12.99,
      date: new Date(2021, 1, 25),
    },
    {
      id: 'el3',
      title: 'Coffee Beans',
      amount: 18.75,
      date: new Date(2021, 4, 8),
    },
    {
      id: 'el4',
      title: 'Notebook',
      amount: 5.49,
      date: new Date(2021, 8, 17),
    },
  ];

  return (
    <div>
      <h1>Let's get started</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
