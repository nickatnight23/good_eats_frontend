import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import RestaurantsContainer from '../containers/RestaurantsContainer'

function Router() {
    return (
        <Switch>
            <Route exact root path='/' component={Home} />
            <Route path='/Restaurants' component={RestaurantsContainer} />
        </Switch>
    )
}

export default Router
