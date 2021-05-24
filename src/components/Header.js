import React from 'react'
import { connect } from 'react-redux'

 const Header = (props) => {
    return (
        
           <h2> Expense Tracker</h2>
    
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
