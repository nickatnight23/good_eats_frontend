import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchRestaurant,removeRestaurant } from '../actions/restaurantActions'
// import {Link} from 'react-router'

class RestaurantList extends Component  {
    componentDidMount () {
        this.props.fetchRestaurant()
    }

    handleClick = e => {
          e.preventDefault()
          this.props.removeRestaurant(e.target.id)
    }
    render(){

      return(
        <div>
          {this.props.restaurants.map(restaurant => <ul><li key={restaurant.id}>{restaurant.name} - {restaurant.description}- <button id = {restaurant.id} class = ' ui button' onClick ={this.handleClick}>Remove</button> </li></ul>)}
          {/* <button class="ui button">Click Here</button> */}
        </div>
      );
    }
}

const mapStateToProps = state => {   

  return {
  restaurants: state.restaurants.restaurants,
  loading: state.restaurants.loading         
  }
}


    

export default connect(mapStateToProps,{fetchRestaurant,removeRestaurant})(RestaurantList);