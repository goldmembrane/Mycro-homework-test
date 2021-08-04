import { AUTH_USER } from "../actions/type"

const initialState = {
    userToken: '',
}

export const tokenReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_USER:
            return Object.assign({}, state, {
                userToken: action.userToken
            })
        default:
            return state
    }
}