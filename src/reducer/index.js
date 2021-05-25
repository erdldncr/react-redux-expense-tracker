import {ADD_TRANSACTION_FULLFILLED, DELETE_TRANSACTION} from '../action-types'

const initialState = {
    transactionList:[

    ]
}

function reducer (state = initialState, action)  {
    switch (action.type) {

        case ADD_TRANSACTION_FULLFILLED:
            console.log(action.payload)
            return {...state,
                transactionList:[
                    ...state.transactionList,
                    {
                        id:new Date().getTime(),
                        text:action.payload.text,
                        amount:(+action.payload.money)
                    }
                ]}
        case DELETE_TRANSACTION:
            console.log('erdal')
            return {
                ...state,
                transactionList:state.transactionList.filter(transaction=>transaction.id!==action.payload)
            }
    default:
        return state
    }
}
export default reducer