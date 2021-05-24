import React from 'react'
import { connect } from 'react-redux'

 const IncomeExpenses = (props) => {
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-$0.00</p>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeExpenses)
