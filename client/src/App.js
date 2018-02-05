import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./components/pages/Main";
import Search from "./components/pages/Search";
import Property from "./components/pages/Property";
import Profile from "./components/pages/Profile/Profile";
import UserProfile from "./components/pages/UserProfile/UserProfile";
import Import from "./components/pages/Import";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/property" component={Property} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/import" component={Import} />
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
