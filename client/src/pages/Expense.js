import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import TotalExpenseModal from '../components/ExpenseTotal'  
const Expense = () => {
    return (
        <div className="container"> 
        <ExpenseForm/>
        <ExpenseList/>
        <TotalExpenseModal/>
        </div>
    )
}

export default Expense