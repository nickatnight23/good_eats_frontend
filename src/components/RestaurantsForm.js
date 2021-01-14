import React, { Component } from 'react'
import {addRestaurant} from '../actions/restaurantActions'
import  {connect} from 'react-redux'
import {removeRestaurant} from '../actions/restaurantActions'

 class RestaurantsForm extends Component {

    state = {
        name: '',
        description: ''

    }

    handleChange = e => {
        const { name, value} = e.target
        this.setState({
            [name]: value
        })
       
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addRestaurant(this.state)

    }
    handleClick = e => {
        e.preventDefault()
        this.state.removeRestaurant(e.target.id)
    }
   
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>Name:</label>
                   <input type= 'text' value={this.state.name} onChange={this.handleChange} name = "name"/>
                   <br/>
                   <label>Description:</label>
                   <input type= 'text' value={this.state.description} onChange={this.handleChange} name = "description"/>
                   <br/>
                    <input type= 'submit'value ="Add Restaurant"/>
                    </form> 
                    {/* <button id={restaurant.id} onClick={this.handleClick}>X</button> */}
                      
            </div>
        )
    }
}

export default connect(null,{addRestaurant,removeRestaurant}) (RestaurantsForm);

