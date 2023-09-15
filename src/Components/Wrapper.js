import React from 'react'
import "./Wrapper.css"
import ExpenseItems from './ExpenseItems'

const Wrapper = (props) => {
  
  let month = props.date.toLocaleString('en-US', {month: 'long'});
  let year = props.date.getFullYear();
  let day = props.date.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className='wrapper'>
       <ExpenseItems month={month} year={year} day={day} title={props.title} amount={props.amount}/>
    </div>
  )
}

export default Wrapper