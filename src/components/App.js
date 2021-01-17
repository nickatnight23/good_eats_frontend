import React from 'react'
// import Router from './Routes'
// import RestaurantsContainer from '../containers/RestaurantsContainer'
// import RestaurantList from './RestaurantList'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Navigate from '../components/Navigate'
import Home from '../components/Home'
import RestaurantsForm from './RestaurantsForm'
import RestaurantList from './RestaurantList'
import About from './About'
import Footer from './Footer'
import './App.css'
import Contact from './Contact'

// import RestaurantsContainer from '../containers/RestaurantsContainer'
// import southpark from './southpark.gif';
// import {connect} from 'react-redux'




class App extends React.Component {
  render(){
    
    return (
      <Router>
        <div className="page-container">
          <div className="content-wrap">
       
          <Navigate />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path ="/RestaurantForm" component ={RestaurantsForm}/>
            <Route exact path ="/RestaurantList" component ={RestaurantList}/>
            <Route exact path = "/About" component = {About}/>
            <Route exact path = "/Contact" component ={Contact} />
            {/* <img src={southpark} alt="southpark" height={200} width={200}/> */}
          </Switch>
         

        </div>
        <Footer />
        </div>
        </Router>
    
        
  
    )
  }
  
}

export default App;
