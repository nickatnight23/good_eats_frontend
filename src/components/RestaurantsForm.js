import React, { Component } from 'react'
import {addRestaurant} from '../actions/restaurantActions'
import  {connect} from 'react-redux'

// const styling = {
//     width: '200px',
//     padding: '10px',
//     margin: '0 8px 8px',
//     background: 'blue',
//     textDecoration: 'none',
//     color: "white"
// }



 class RestaurantsForm extends Component {

    state = {
        name: '',
        description: ''

    }

    handleChange = (event) => {
        // debugger 
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = e => {
        this.setState({name:'', description:''})
        e.preventDefault()
        this.props.addRestaurant(this.state)
        this.props.history.push('./RestaurantList')

    }
   
   
    render() {
        return (
            
            <div class ="ui container">
    
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

