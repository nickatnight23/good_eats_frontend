import React, { Component } from 'react'
import {addRestaurant} from '../actions/restaurantActions'
import  {connect} from 'react-redux'

 class RestaurantsForm extends Component {

    state = {
        name: '',
        description: '',
        image_url:''
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
                    <label>Image:</label>
                    <input type= 'text' value={this.state.image_url} onChange={this.handleChange} name = "image"/>
                    <br/>
                    <input type= 'submit'value ="Add Restaurant"/>
                    </form> 
                      
            </div>
        )
    }
}

export default connect(null,{addRestaurant}) (RestaurantsForm);

