import React, { Component } from 'react'
import {addRestaurant} from '../actions/restaurantActions'
import  {connect} from 'react-redux'




 class RestaurantsForm extends Component {

    state = {
        name: '',
        description: ''

    }

    handleChange = (event) => {
        // debugger 
        this.setState({
            //for interpolation
            // this is to dynamically update object property
            // you could have multiple react inputs having a different name property
            // And using the same onChange handler to update part of the state
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = e => {
        this.setState({name:'', description:''})
        e.preventDefault()
        this.props.addRestaurant(this.state)
        // redirect user to this url
        this.props.history.push('./RestaurantList')

    }
   
   
    render() {
        return (
            
            <div class ="container">
    
               <form onSubmit={this.handleSubmit}>
                    
                   <label>Name:</label>
                    <b><p></p></b>
                     <b><p></p></b>
            
                   <input type= 'text' placeholder = "name" name= "name" value={this.state.name} onChange={this.handleChange} name = "name"/>
                   <br/>
                    <b><p></p></b>
                   <label>Description:</label>
                    <b><p></p></b>

                   <input type= 'text' placeholder = "description" description = "description" value={this.state.description} onChange={this.handleChange} name = "description"/>
                     <b><p></p></b>
                   <br/>
                   <button class="ui red button">Add Restaurant</button>

                    </form> 
                  
              
            </div>
        )
    }
}

export default connect(null,{addRestaurant}) (RestaurantsForm);
// null means not subscribed to the stores updates
