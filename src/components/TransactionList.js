import React from 'react'
import { connect } from 'react-redux'

import Transaction from './Transaction'
 const TransactionList = ({transactionList,deleteTransaction}) => {
    return (
        <>
             <h3>History</h3>
      <ul  className="list">
         {transactionList.map(transaction=>(
           <Transaction key={transaction.id} {...transaction}/>
         ))}
      </ul>
        </>
    )
}

const mapStateToProps = ({transactionList}) => ({
    transactionList
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
