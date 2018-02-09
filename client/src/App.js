import React, { Component } from 'react';
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






class App extends Component {
    constructor() {
      super();
      this.setCurrentUser = this.setCurrentUser.bind(this);
      this.state = {
        authenticated: false,
        currentUser: null,
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
            loading: false
          })
          console.log(this.state);
        } else {
          this.setState({
            authenticated: false,
            loading: false

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
            <Route exact path="/login" render={(props) => {
              return <Login setCurrentUser={this.setCurrentUser} {...props} />
                  }} />
            <Route exact path="/logout" component={Logout} />
            
            <Route exact path="/" component={Main} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/property" component={Property} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/import" component={Import} />


          </div>
        </Router>
      </div>
    );
  }
}
export default App;