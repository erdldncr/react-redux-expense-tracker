import {ADD_TRANSACTION_FULLFILLED, DELETE_TRANSACTION} from '../action-types'

const initialState = {
    transactionList:[
          { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
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