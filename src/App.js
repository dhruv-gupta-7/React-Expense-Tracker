import "./App.css";
import React, {useState} from "react";
import Wrapper from "./Components/Wrapper.js";
import NewExpense from "./Components/NewExpense";


let date = [
  {
    id: 'e1',
    date: new Date(2023, -0, 1),
    title: "College fee",
    amount: `$250`,
  },

  {
    id: 'e2',
    date: new Date(2023, 1, 2),
    title: "Books",
    amount: `$350`,
  },

  {
    id: 'e3',
    date: new Date(2023, 2, 3),
    title: "House Rent",
    amount: `$450`,
  },

  {
    id: 'e4',
    date: new Date(2023, 3, 4),
    title: "Food",
    amount: `$550`,
  },
];

function App() {

  const [expenses, setExpenses]=useState(date);

  const recieveData = (recievedData) => {

    let updatedData=[recievedData, ...expenses];
    setExpenses(updatedData);
    console.log(updatedData);

    const expenseData={
      id: Math.random().toString(),
      title: recievedData.title,
      amount: recievedData.amount,
      date: recievedData.date,
    }
    console.log(expenseData);
  };


  return (

    <div className="App">
       <h1>Expense Tracker</h1>

      <NewExpense saveData={recieveData} />

      <div>
       
        {
        expenses.map(
          expense => (
          <Wrapper 
          key={expense.id}
          date={expense.date} 
          title={expense.title} 
          amount={expense.amount}
           />
        )
     )
  }
      </div>
    </div>
  );
}

export default App;
