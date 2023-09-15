import React, { useState } from 'react'
import './ExpenseItems.css'
import DateMonthYear from './DateMonthYear'

const ExpenseItems = (props) => {

  //  const [title, newTitle]=useState(props.title);

  //  let value;

  // let changeHandler= (e)=>{
  //   value= e.target.value;
  // }

  // let changeTitle=()=>{
  //   newTitle(document.getElementById('value').value);
  // }

  return (

    <div className='ExpenseItems'>
        <DateMonthYear month={props.month} year={props.year} day={props.day} />        
        <div className='title'>{props.title}</div>
        <div className='amount'>{props.amount}</div>
        {/* <input type="text" id='value'></input>
        <button onClick={changeTitle}>Change Title</button> */}
    </div>
  )
}

export default ExpenseItems