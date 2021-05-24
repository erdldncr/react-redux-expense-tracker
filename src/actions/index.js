import { ADD_TRANSACTION_FULLFILLED,DELETE_TRANSACTION } from "../action-types";


export function Add(text,money){
    return  dispatch=>dispatch({type:ADD_TRANSACTION_FULLFILLED,payload:{text,money}})
}
export function deleteTransaction(id){
    console.log('erdal')
    return dispatch=>dispatch({
        type:DELETE_TRANSACTION,
        payload:id
    })
}