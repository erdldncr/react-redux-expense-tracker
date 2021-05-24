import React from 'react'
import { connect } from 'react-redux'

 const TransactionList = ({transactionList}) => {
    return (
        <>
             <h3>History</h3>
      <ul  className="list">
         {transactionList.map(transaction=>(
           <li  className="minus">
           Cash <span>-$400</span><button className="delete-btn">x</button>
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
