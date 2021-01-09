// create an action that is going to fetch restaurants from my api

export const fetchRestaurant = () =>{
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/restaurants')
        .then(resp => resp.json())
        .then(restaurants => console.log({type: 'FETCH_RESTAURANTS', payload: restaurants}))
    }
}

export const addRestaurant = restaurant => {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/restaurants',{
            method: 'Post',
            body: JSON.stringify(restaurant),
            headers:{'Content-Type':'application/json'}
        })
        .then(resp => resp.json())
        .then(restaurants => console.log({type: 'ADD_RESTAURANTS', payload: restaurants}))
    }
}
