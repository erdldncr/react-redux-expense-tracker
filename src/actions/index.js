import { ADD } from "../action-types";

export function Add(text,money){
    return  dispatch=>dispatch({type:ADD,payload:text,money})
}