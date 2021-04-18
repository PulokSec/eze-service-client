import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddService from './Components/Dashboard/AddService/AddService';
import AddTeam from './Components/Dashboard/AddTeam/AddTeam';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import Payment from './Components/Dashboard/Payment/Payment';
import Review from './Components/Dashboard/Review/Review';
import AllOrders from './Components/AllOrders/AllOrders';
import ManageService from './Components/Dashboard/ManageService/ManageService';
import Orders from './Components/Dashboard/Orders/Orders';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart,setCart] = useState([]);
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser,cart,setCart}}>
      <Router>
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
        <Login/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>        
        <PrivateRoute path="/payment">
          <Payment/>
        </PrivateRoute>        
        <PrivateRoute path="/orders">
          <Orders/>
        </PrivateRoute>        
        <PrivateRoute path="/review">
          <Review/>
        </PrivateRoute>        
        <PrivateRoute path="/allOrders">
          <AllOrders/>
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService/>
        </PrivateRoute>        
        <PrivateRoute path="/addTeam">
          <AddTeam/>
        </PrivateRoute>        
        <PrivateRoute path="/addAdmin">
          <AddAdmin/>
        </PrivateRoute>        
        <PrivateRoute path="/manageService">
          <ManageService/>
        </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
