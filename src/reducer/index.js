import {ADD_TRANSACTION_FULLFILLED} from '../action-types'

const initialState = {
    transactionList:[]
}

function reducer (state = initialState, action)  {
    switch (action.type) {

        case ADD_TRANSACTION_FULLFILLED:
          
            return {...state}

    default:
        return state
    }
}
export default reducer