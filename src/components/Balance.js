import React from 'react'
import { connect } from 'react-redux'

 const Balance = ({transactionList}) => {
    return (
        <>
            <h4>Your Balance</h4>
         <h1>{
            transactionList
            .reduce((sum,transaction)=>sum+transaction.amount,0)
          }</h1>

        </>
    )
}

const mapStateToProps = ({transactionList}) => ({
    transactionList
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance)
