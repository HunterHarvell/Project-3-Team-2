import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
const Expense = () => {
    return (
        <div className="container"> 
        <h2>Log your expenses here</h2>
        <ExpenseForm/>
        {/* <ExpenseList/> */}
        </div>
    )
}

export default Expense