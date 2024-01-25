import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Bathroom',
    },
    {
      id: 'el2',
      title: 'Shampoo',
      amount: 12.99,
      date: new Date(2021, 1, 25),
      location: 'Bathroom',
    },
    {
      id: 'el3',
      title: 'Coffee Beans',
      amount: 18.75,
      date: new Date(2021, 4, 8),
      location: 'Kitchen',
    },
    {
      id: 'el4',
      title: 'Notebook',
      amount: 5.49,
      date: new Date(2021, 8, 17),
      location: 'Office',
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
          location={expense.location} // Pass the location to ExpenseItem
        />
      ))}
    </div>
  );
}

export default App;
