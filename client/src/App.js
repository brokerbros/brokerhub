import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Main from "./components/pages/Main";
import Search from "./components/pages/Search";
import Property from "./components/pages/Property";
import Profile from "./components/pages/Profile/Profile";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Import from "./components/pages/Import";
import SideNav from "./components/SideNav/SideNav";
import Navbar from "./components/Navbar/Navbar";
import Login from './components/Login';
import Logout from './components/Logout';
import { app, base } from './base';

function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
          ? <Component {...props} {...rest} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} /> } 
    />
  )
}

function ShowRoute({component: Component, items, param, ...rest}) {
  return (
    <Route
      {...rest}
      render={({match, ...props}) => {
        if (rest.requireAuth === true && !rest.authenticated) {
          return (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
          )
        }

        const item = items[match.params[param]]
        if (item) {
          return <Component item={item} {...props} match={match} {...rest}/>
        } else {
          return <h1>Not Found</h1>
        }
      }}
    />
  )
}


class App extends Component {
    constructor() {
      super();
      this.setCurrentUser = this.setCurrentUser.bind(this);
      this.state = {
        authenticated: false,
        currentUser: null,
        uid : ""
      };
    }
  
  
    setCurrentUser(user) {
      if (user) {
        this.setState({
          currentUser: user,
          authenticated: true
        })
        console.log("we logged in");
      } else {
        this.setState({
          currentUser: null,
          authenticated: false
        })
      }
    }
  
    componentWillMount() {
      this.removeAuthUser = app.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            authenticated: true,
            currentUser: user,
          })
  
        } else {
          this.setState({
            authenticated: false,
            currentUser: null,
          })
        }
      })
    }
  
    componentWillUnmount() {
      this.removeAuthUser();
    }

  render() {
    return (
      <div style={{maxWidth: "1160px", margin: "0 auto"}}>
      <Router>
        <div>
        <Navbar authenticated={this.state.authenticated} />
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/property" component={Property} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/import" component={Import} />



                <Route exact path="/login" render={(props) => {
                  return <Login setCurrentUser={this.setCurrentUser} {...props} />
                }} />
                <Route exact path="/logout" component={Logout} />

        </div>

      </Router>

      </div>
    );
  }
}
export default App;