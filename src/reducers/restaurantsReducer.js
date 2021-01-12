export const restaurantsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_RESTAURANTS':
            return action.payload
        case 'ADD_RESTAURANTS':
                debugger
                return[...state,action.payload]
        default:
                return state
    }
}