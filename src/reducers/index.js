import { combineReducers } from "redux"
import { tokenReducer, pageReducer } from './userReducer'

const rootReducer = combineReducers({
    tokenReducer,
    pageReducer,
})

export default rootReducer