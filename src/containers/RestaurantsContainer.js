import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchRestaurant} from '../actions/restaurantActions'
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
            </div>
        )
    }
}

export default connect(null,{fetchRestaurant})(RestaurantsContainer);