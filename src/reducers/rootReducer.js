import {combineReducers} from 'redux'
import {restaurantsReducer} from './restaurantsReducer'
import {usersReducer} from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer
})