import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchRestaurant} from '../actions/restaurantActions'

 class RestaurantsContainer extends Component {

    componentDidMount (){
        this.props.fetchRestaurant()
    }
    render() {
        return (
            <div>
               Restaurant Container 
            </div>
        )
    }
}

export default connect(null,{fetchRestaurant})(RestaurantsContainer);