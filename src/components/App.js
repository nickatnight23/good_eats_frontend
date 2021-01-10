import React from 'react'
import Router from './Router'
import RestaurantsContainer from '../containers/RestaurantsContainer'
import RestaurantList from './RestaurantList'

function App() {
  return (
    <div>
      NAV LINK
      <RestaurantsContainer/>
      <Router/>
    </div>
  )
}

export default App
