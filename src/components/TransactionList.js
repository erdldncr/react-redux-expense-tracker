import React from 'react'
import { connect } from 'react-redux'
import {deleteTransaction} from '../actions'
 const TransactionList = ({transactionList,deleteTransaction}) => {
    return (
        <>
             <h3>History</h3>
      <ul  className="list">
         {transactionList.map(transaction=>(
           <li  key={transaction.id} className="minus">
           {transaction.text} <span>{transaction.amount}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
         </li> 
         ))}
      </ul>
        </>
    )
}

const mapStateToProps = ({transactionList}) => ({
    transactionList
})

const mapDispatchToProps = {
    deleteTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
