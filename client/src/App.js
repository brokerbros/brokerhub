import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
import { app, base } from './base';


class App extends Component {
    constructor() {
      super();
      this.setCurrentUser = this.setCurrentUser.bind(this);
      this.updateCurrentUserInfo = this.updateCurrentUserInfo.bind(this);
      this.updateDatabaseUserInfo = this.updateDatabaseUserInfo.bind(this);
      this.state = {
        authenticated: false,
        currentUser: null,
        currentUserInfo: null

      };
    }
  
    setCurrentUser(user) {
      if (user) {
        //console.log("setCurrentUser",user);
        this.setState({
          currentUser: user,
          authenticated: true
        })
        //this.getUserInfoFromDataBase(user);
        console.log("we logged in");
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
      console.log("RUN Database Update")
      API.updateUsers(this.state.currentUserInfo["_id"],this.state.currentUserInfo)
        .then(res => {
          console.log("User Data Updated", res.status)
        })
        .catch(err => {
          console.log(err)
        })
    }

    getUserInfoFromDataBase(user) {
      //console.log(user,user.email)
      API.getUserByEmail(user.email)
        .then(res => {
          console.log("found user", user.email, res, res.data)
          if(res.data.length > 0){
            console.log("Data Found")
            this.setState({ 
              currentUserInfo: res.data[0],
              authenticated: true,
              currentUser: user
            })
            console.log(this.state.currentUserInfo)
          }else {
            console.log("No Data found")
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
              title:  "",
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
          //console.log("New USER", res)
          this.setState({ 
            authenticated: true,
            currentUser: fbUserData
          })
          console.log(res,"New User Added to DB!")
        })
        .catch(err => console.log(err))
    }
  
    componentWillMount() {
      this.removeAuthUser = app.auth().onAuthStateChanged((user) => {
        if (user) {
          //console.log("componentWillMount",user, user.email);
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
        return <Route exact path="/profile" render={(props) => {
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

  render() {
    return (
      <div style={{maxWidth: "1160px", margin: "0 auto"}}>
      <Router>
        <div>
          <Navbar authenticated={this.state.authenticated} />
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/property/:id" component={Property} />
          <Route exact path="/property" component={Search} />
          {this.viewProfile()}
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