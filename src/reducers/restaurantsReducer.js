export const restaurantsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_RESTAURANTS':
            return action.payload
            default:
                return state
    }
}