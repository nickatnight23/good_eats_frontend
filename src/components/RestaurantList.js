import React from 'react'
import {connect} from 'react-redux'

function RestaurantList (props) {
     
    return (
        <div>
            {props.restaurants.map(restaurant => <ul><li key={restaurant.id}>{restaurant.name} - {restaurant.description}-</li></ul>)}
        </div>
    );
}


const mapStateToProps = state =>{
    return{restaurants: state.restaurants}
}

export default connect(mapStateToProps)(RestaurantList);
