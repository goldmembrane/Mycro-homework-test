import { AUTH_USER, PAGE_CONTROL } from "../actions/type"

const initialState = {
    userToken: '',
}

const pageState = {
    pageStatus: 'service',
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

export const pageReducer = (state = pageState, action) => {
    switch(action.type) {
        case PAGE_CONTROL:
            return Object.assign({}, state, {
                pageStatus: action.pageStatus
            })
        default:
            return state
    }
}