import React from 'react'
import { NavLink } from 'react-router-dom';
const links = {
    width: '200px',
    padding: '25px',
    margin: '0 5px 5px',
    background: 'grey',
    textDecoration: 'none',
    color: "white"
}
const Navigate = () => {
    return (
        <div>
            <div class="ui column centered grid">
            <NavLink
                to="/"
                exact
                style={links}
                activeStyle={{
                    background: ' grey'
                }}
            > Home
            </NavLink>
            <NavLink
                to="/RestaurantForm"
                exact
                style={links}
                activeStyle={{
                    background: 'grey'
                }}
            > Restuaurant Form
            </NavLink>
            <NavLink
                to="/RestaurantList"
                exact
                style={links}
                activeStyle={{
                    background: 'grey'
                }}
            > RestaurantList
            </NavLink>
            <NavLink
                to="/About"
                exact
                style={links}
                activeStyle={{
                    background: 'grey'
                }}
            > About
            </NavLink>
            <NavLink
                to="/Contact"
                exact
                style={links}
                activeStyle={{
                    background: 'grey'
                }}
            > Contact
            </NavLink>
            <b><p></p></b> 
        </div>
        </div>
    )

}
export default Navigate