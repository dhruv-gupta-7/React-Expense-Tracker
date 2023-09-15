import React from 'react'
import "./DateMonthYear.css"


const DateMonthYear = (props) => {
   
  return (
    <div className='Date'>
      <div>{props.month}</div>
      <div>{props.year}</div>
      <div>{props.day}</div>
    </div>
  )
}

export default DateMonthYear