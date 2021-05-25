import React from 'react'
import { connect } from 'react-redux'
import {deleteTransaction} from '../actions'
 const Transaction = ({deleteTransaction,id,text,amount}) => {
    return (
        <li  key={id} className={`${amount>=0?"plus":"minus"}`}>
        {text} <span>${amount}</span><button onClick={()=>deleteTransaction(id)} className="delete-btn">x</button>
      </li> 
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    deleteTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)
