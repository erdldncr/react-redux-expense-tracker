import { ADD } from "../action-types"

const initialState = {

}

function reducer (state = initialState, action)  {
    switch (action.type) {

        case ADD:
            return {...state}

    default:
        return state
    }
}
export default reducer