import React from 'react'
import { connect } from 'react-redux'

 const Balance = (props) => {
    return (
        <>
            <h4>Your Balance</h4>
         <h1 >$0.00</h1>

        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance)