export const restaurantsReducer = (state = {restaurants: [], loading: false}, action) => {
    switch(action.type) {
        case("LOADING_RESTAURANTS"):
        return {...state, loading: true}
        case ('FETCH_RESTAURANTS'):
            return {...state, loading: false, restaurants: action.payload}
        case("ADDING_RESTAURANT"):
            return {...state, loading: true}
        case 'ADD_RESTAURANTS':
                return{...state, loading: false,restaurants: [...state.restaurants, action.payload]}
        case ('REMOVING_RESTAURANT'):
                return {...state, loading: true}
         case ('REMOVE_RESTAURANT'):
            //   debugger 
            return {...state, loading:  false,
               restaurants: state.restaurants.filter(restaurant => restaurant.id != action.payload) 
    
            }
        default:  
            return state   
    }
}

//the root reducer function is called with the current state and the dispatched action