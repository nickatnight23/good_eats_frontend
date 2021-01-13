export const restaurantsReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_RESTAURANTS':
            return action.payload
        case 'ADD_RESTAURANTS':
                return[...state,action.payload]
        default:
                return state
        case ("REMOVING_RESTAURANT")
                return [...state, loading: true]
         case ("REMOVE_RESTAURANT"): 
            return [...state, loading: false,
               restaurants: state.restaurants.filter(restaurant => restaurant.id != action.payload) 
            ]
        default:  
            return state   
    }
}