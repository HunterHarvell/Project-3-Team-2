import React from 'react'
import IncomeForm from '../components/IncomeForm'
import IncomeList from '../components/IncomeList'
const Income = () => {
    return (
        <div className="container"> 
        <h2>Log your incomes here</h2>
        <IncomeForm/>
        <IncomeList/>
        </div>
    )
}

export default Income