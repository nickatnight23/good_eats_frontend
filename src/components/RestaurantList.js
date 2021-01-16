import React from 'react'
import {connect} from 'react-redux'
import {removeRestaurant} from '../actions/restaurantActions'




function RestaurantList (props) {
    // debugger
   const handleClick = e => {
        e.preventDefault()
        // debugger
        props.removeRestaurant(e.target.id)
    }
     
    return (
    
        <div>
        
            {props.restaurants.map(restaurant => <ul><li key={restaurant.id}>{restaurant.name} - {restaurant.description}- <button id = {restaurant.id} class = ' ui button' onClick={handleClick}>Remove</button> </li></ul>)}
            {/* <button class="ui button">Click Here</button> */}
        </div>
    );
}


const mapStateToProps = state =>{
    // debugger
    return{restaurants: state.restaurants.restaurants}
}

export default connect(mapStateToProps,{removeRestaurant})(RestaurantList);
