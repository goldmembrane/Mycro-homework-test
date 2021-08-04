import { combineReducers } from "redux"
import { tokenReducer } from './userReducer'

const rootReducer = combineReducers({
    tokenReducer,
})

export default rootReducer