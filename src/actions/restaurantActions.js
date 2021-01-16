// create an action that is going to fetch restaurants from my api

export const fetchRestaurant = () =>{
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/restaurants')
        .then(resp => resp.json())
        .then(restaurants =>{
            dispatch({type: 'FETCH_RESTAURANTS', payload: restaurants})})
    }
}


export const addRestaurant = restaurant => {
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

