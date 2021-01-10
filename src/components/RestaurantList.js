import React from 'react'
import {connect} from 'react-redux'

function RestaurantList ({restaurants}) {
    return (
        <div>
            {restaurants.map(restaurant => <ul><li key={restaurant.id}>{restaurant.name} - {restaurant.description}-{restaurant.image_url} </li></ul>)}
        </div>
    );
}


const mapStateToProps = state =>{
    return{restaurants: state.restaurants}
}

export default connect(mapStateToProps)(RestaurantList);
