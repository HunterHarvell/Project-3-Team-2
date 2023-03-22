import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
const Expense = () => {
    return (
        <div className="container"> 
        <h2>Log your expenses here</h2>
        <ExpenseForm/>
        <ExpenseList/>
        </div>
    )
}

export default Expense