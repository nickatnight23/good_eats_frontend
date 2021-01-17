import React from 'react'
import { NavLink } from 'react-router-dom';
const links = {
    width: '200px',
    padding: '25px',
    margin: '0 5px 5px',
    background: 'blue',
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
                    background: 'green'
                }}
            > Home
            </NavLink>
            <NavLink
                to="/RestaurantForm"
                exact
                style={links}
                activeStyle={{
                    background: 'blue'
                }}
            > Restuaurant Form
            </NavLink>
            <NavLink
                to="/RestaurantList"
                exact
                style={links}
                activeStyle={{
                    background: 'blue'
                }}
            > RestaurantList
            </NavLink>
            <NavLink
                to="/About"
                exact
                style={links}
                activeStyle={{
                    background: 'blue'
                }}
            > About
            </NavLink>
            <NavLink
                to="/Contact"
                exact
                style={links}
                activeStyle={{
                    background: 'blue'
                }}
            > Contact
            </NavLink>
            <b><p></p></b> 
        </div>
        </div>
    )

}
export default Navigate