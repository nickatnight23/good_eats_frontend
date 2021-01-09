import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchRestaurant} from '../actions/restaurantActions'
import RestaurantList from '../components/RestaurantList'
import RestaurantsForm from '../components/RestaurantsForm'

 class RestaurantsContainer extends Component {

    componentDidMount (){
        this.props.fetchRestaurant()
    }
    render() {
        return (
            <div>
               Restaurant Container 
               <RestaurantsForm/>
               <RestaurantList/>
            </div>
        )
    }
}

export default connect(null,{fetchRestaurant})(RestaurantsContainer);