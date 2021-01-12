import React, { Component } from 'react'
import {addRestaurant} from '../actions/restaurantActions'
import  {connect} from 'react-redux'

 class RestaurantsForm extends Component {

    state = {
        name: '',
        description: '',
        city: '',
        state: ''
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
    //     const formData = new FormData();
    // formData.append('name', this.state.name);
    // formData.append('description', this.state.description);
    // formData.append('image_url', this.state.image_url);
    // debugger
    }
    // OnImageChange = e =>{
        // this.setState ({image_url: e.target.files[0]});
    // }
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
                   <label>City:</label>
                   <input type= 'text' value={this.state.city} onChange={this.handleChange} name = "city"/>
                   <br/>
                   <label>State:</label>
                   <input type= 'text' value={this.state.state} onChange={this.handleChange} name = "state"/>
                   <br/>
                    {/* <label>Image:</label>
                    <input type= 'file' accept= "image/*"multiple ={false} onChange={this.OnImageChange} name="image_url"/>
                    <br/> */}
                    <input type= 'submit'value ="Add Restaurant"/>
                    </form> 
                      
            </div>
        )
    }
}

export default connect(null,{addRestaurant}) (RestaurantsForm);

