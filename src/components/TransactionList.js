import React from 'react'
import { connect } from 'react-redux'

 const TransactionList = (props) => {
    return (
        <>
             <h3>History</h3>
      <ul  className="list">
         <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li> 
      </ul>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
