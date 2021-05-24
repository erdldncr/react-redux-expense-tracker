import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Add} from '../actions'
 const AddTransaction = (props) => {
    const[amount,setAmount]=useState(0)
    const [text,setText]=useState('')
    const handleClick=(e)=>{
      e.preventDefault()
      
      if(text&&amount){
        props.Add(text,amount)
      }
      setAmount('')
      setText('')
    }
   
    return (
        <>
              <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"onChange={(e)=>setText(e.target.value)} value={text} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button onClick={handleClick} className="btn">Add transaction</button>
      </form>   
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
   Add
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction)
