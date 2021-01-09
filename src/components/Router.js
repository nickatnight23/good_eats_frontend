import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import RestaurantList from '../components/RestaurantList'

function Router() {
    return (
        <Switch>
            <Route exact root path='/' component={Home} />
            <Route path='/Restaurants' component={RestaurantList} />
        </Switch>
    )
}

export default Router
