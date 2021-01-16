import React from 'react'
import { NavLink } from 'react-router-dom';
const links = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: "white"
}
const Navigate = () => {
    return (
        <div>
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
                to="/RestaurantContainer"
                exact
                style={links}
                activeStyle={{
                    background: 'blue'
                }}
            > Restuaurant RestaurantList
            </NavLink>
        </div>
    )

}
export default Navigate