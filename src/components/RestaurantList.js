import React, {Component} from 'react'
import {connect} from 'react-redux'
import { fetchRestaurant,removeRestaurant } from '../actions/restaurantActions'
import LikeButton from './LikeButton'
// import {Link} from 'react-router'

class RestaurantList extends Component  {
  
   

    handleClick = e => {
          e.preventDefault()
          this.props.removeRestaurant(e.target.id)
    }
    render(){

      return(
        <div>
          <LikeButton />
          {this.props.restaurants.map(restaurant =>  <ul>< LikeButton /><li key={restaurant.id}>{restaurant.name} - {restaurant.description}- <button id = {restaurant.id} class = ' ui button' onClick ={this.handleClick}>Remove</button> </li></ul>)}
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

// const mDTP = dispatch => {
//   return {
//     fetchRestaurant: () => dispatch(fetchRestaurant()),
//     removeRestaurant: () => dispatch(removeRestaurant())
//   }
// }
    
// reference to function
export default connect(mapStateToProps, {removeRestaurant,fetchRestaurant})(RestaurantList);

// connect allows us to connect our component to our redux
// allows us to use our action-object creator functions
//mapDispatchToProps object where each field is a action creator