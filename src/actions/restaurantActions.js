// create an action that is going to fetch restaurants from my api

export const fetchRestaurant = () =>{

    // dispatch function receives the dispatch method from the store

    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/restaurants')  // async request is made 
        .then(resp => resp.json()) //promise
        .then(restaurants =>{
            dispatch({type: 'FETCH_RESTAURANTS', payload: restaurants})})
    }
}

// once the promise is resolved the fetch thunk takes the response.restaurants array that was returned
// from the callback and dispatches an action containing the resturants array as action.payload

// action creator.... Thunk action creator
export const addRestaurant = restaurant => {
    // Return an Action code that causes an update to the state when something happens
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/restaurants',{
        
            method: 'POST',
            body: JSON.stringify(restaurant),
            headers:{'Content-Type':'application/json'}
        })
        .then(resp => resp.json())
        .then(restaurant => dispatch({type: 'ADD_RESTAURANTS', payload: restaurant}))
    }
}

export const removeRestaurant = (id) => {
    return (dispatch) => {
        dispatch({type: "REMOVING_RESTAURANT"})
        fetch(`http://localhost:3001/api/v1/restaurants/${id}`,{
        
            method: 'DELETE',
            headers:{'Content-Type':'application/json'}
        })
        .then(() => dispatch({type: 'REMOVE_RESTAURANT', payload: id}))
    }
}

