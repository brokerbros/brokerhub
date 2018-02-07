import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { app } from '../base'
import { Spinner } from '@blueprintjs/core'

class Logout extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }
  }

  componentWillMount() {
    app.auth().signOut().then((user) => {
      this.setState({ redirect: true })
    })
  }

  render() {
      return 
      <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
        <h3>Logging Out</h3>
        <Spinner />
      </div>
    }
}

export default Logout
