import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
const Expense = () => {
    return (
        <div className="container"> 
        <h2>Expense Form</h2>
        <ExpenseForm/>
        {/* <ExpenseList/> */}
        </div>
    )
}

export default Expense