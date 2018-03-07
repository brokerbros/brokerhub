import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./components/pages/Main";
import Search from "./components/pages/Search";
import Property from "./components/pages/Property";
import Profile from "./components/pages/Profile/Profile";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Import from "./components/pages/Import";
import Navbar from "./components/Navbar/Navbar";
import Login from './components/Login';
import API from './utils/api'
import Logout from './components/Logout';
import { app } from './base';


class App extends Component {
    constructor() {
      super();
      this.setCurrentUser = this.setCurrentUser.bind(this);
      this.updateCurrentUserInfo = this.updateCurrentUserInfo.bind(this);
      this.updateDatabaseUserInfo = this.updateDatabaseUserInfo.bind(this);
      this.state = {
        authenticated: false,
        currentUser: '',
        currentUserInfo: ''

      };
    }
  
    setCurrentUser(user) {
      if (user) {
        this.setState({
          currentUser: user,
          authenticated: true
        })
      } else {
        this.setState({
          currentUser: null,
          authenticated: false,
          currentUserInfo: null
        })
      }
    }

    updateCurrentUserInfo(userInfo) {
      this.setState({
        currentUserInfo: userInfo
      })
    }

    updateDatabaseUserInfo() {
      API.updateUsers(this.state.currentUserInfo["_id"],this.state.currentUserInfo)
        .then(res => {
          //console.log("User Data Updated", res.status)
        })
        .catch(err => {
          console.log(err)
        })
    }

    getUserInfoFromDataBase(user) {
      API.getUserByEmail(user.email)
        .then(res => {
          if(res.data.length > 0){
            this.setState({ 
              currentUserInfo: res.data[0],
              authenticated: true,
              currentUser: user
            })
          }else {
            const newUser = {
              accountEmail: user.email,
              accountId: user.uid,
              firstName: "",
              lastName: "",
              contactEmail: "",
              telephone: null,
              cellphone: null,
              fax: null,
              title: "",
              location: "",
              specialties: "",
              scopeExperience: "",
              background: "",
              education: "",
              transationHistory: "",
              licenceNumber: null
            }
            this.addUserToDataBase(newUser, user);
          } 
        })
        .catch(err => {
          console.log(err)
        })
    }

    addUserToDataBase(newUser, fbUserData) {
      API.createUser(newUser)
        .then( (res)=> {
          this.setState({ 
            authenticated: true,
            currentUser: fbUserData
          })
        })
        .catch(err => console.log(err))
    }
  
    componentWillMount() {
      this.removeAuthUser = app.auth().onAuthStateChanged((user) => {
        if (user) {
          this.getUserInfoFromDataBase(user);
          // this.setState({
          //   currentUser: user,
          //   authenticated: true
          // })
        } else {
          this.setState({
            authenticated: false,
            currentUser: null,
            currentUserInfo: null
          })
        }
      })
    }
  
    componentWillUnmount() {
      this.removeAuthUser();
    }

    viewProfile(){
      if(this.state.authenticated === true){
        return <Route exact path="/profile/:tab" render={(props) => {
            return (
              <UserProfile 
                authenticated={this.state.authenticated} 
                currentUserInfo={this.state.currentUserInfo}
                updateCurrentUserInfo={this.updateCurrentUserInfo}
                updateDatabaseUserInfo={this.updateDatabaseUserInfo}
              />
            );
          }} />
      }
    }

    viewUserProfile(){
        return <Route exact path="/profile/view/:id" render={(props) => {
            return (
              <Profile 
                authenticated={this.state.authenticated} 
                currentUserInfo={this.state.currentUserInfo}
              />
            );
          }} />
    } 

  render() {
    return (
      <Router>
        <div>
          <Navbar authenticated={this.state.authenticated} />
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/property/:id" component={Property} />
          <Route exact path="/property" component={Search} />
          {this.viewProfile()}
          {this.viewUserProfile()}
          <Route exact path="/import" component={Import} />
          <Route exact path="/login" render={(props) => {
            return <Login setCurrentUser={this.setCurrentUser} {...props} />
            }} />
          <Route exact path="/logout" component={Logout} />
        </div>
        </Router>
    );
  }
}
export default App;