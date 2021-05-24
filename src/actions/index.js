import { ADD_TRANSACTION_FULLFILLED } from "../action-types";


export function Add(text,money){
    return  dispatch=>dispatch({type:ADD_TRANSACTION_FULLFILLED,payload:{text,money}})
}