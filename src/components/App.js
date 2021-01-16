import React from 'react'
// import Router from './Routes'
// import RestaurantsContainer from '../containers/RestaurantsContainer'
// import RestaurantList from './RestaurantList'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Navigate from '../components/Navigate'
import Home from '../components/Home'
import RestaurantsForm from './RestaurantsForm'
import RestaurantList from './RestaurantList'
import RestaurantsContainer from '../containers/RestaurantsContainer'
// import southpark from './southpark.gif';
// import {connect} from 'react-redux'




class App extends React.Component {
  render(){
    
    return (
      <Router>
        <div>
       
          <Navigate />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path ="/RestaurantForm" component ={RestaurantsForm}/>
            <Route exact path ="/ RestaurantContainer" component ={RestaurantsContainer}/>
            {/* <img src={southpark} alt="southpark" height={900} width={1200}/> */}
          </Switch>
         

        </div>
        </Router>
  
    )
  }
  
}

export default App;
