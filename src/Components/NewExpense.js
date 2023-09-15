import React, { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const addTitle = (e) => {
    setTitle(e.target.value);
  };

  const addAmount = (e) => {
    setAmount(e.target.value);
  };

  const addDate = (e) => {
    setDate(e.target.value);
  };

  const addExpense = (e) => {
    e.preventDefault();

    if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
      setError('Please fill out all fields.');
      return;
    }

    const expenseData = {
      title: title,
      amount: `$${amount}`,
      date: new Date(date),
    };

    props.saveData(expenseData);

    console.log(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
    setError('');
  };

  return (
    <div className="wrap">
      <form className="NewExpenseForm" onSubmit={addExpense}>
        {error && <p className="error">{error}</p>}
        <div className="inputFields">
          <p className="Title">Title</p>
          <input type="text" className="inputField1" value={title} onChange={addTitle}></input>
        </div>

        <div className="inputFields">
          <p className="Amount">Amount</p>
          <input type="number" className="inputField2" value={amount} onChange={addAmount}></input>
        </div>

        <div className="inputFields">
          <p id="date">Date</p>
          <input type="date" id="selectDate" onChange={addDate} value={date} />
        </div>
        <button id="addExpense">Add Expense</button>
      </form>
    </div>
  );
};

export default NewExpense;
