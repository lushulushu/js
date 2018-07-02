import React from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import { Redirect } from 'react-router'
import { HashRouter, Switch, Route, Link, withRouter } from 'react-router-dom'

import Home from './home'

import '../styles/app.css'

const mapStateToProps = state => {
  return {
  }
};

class App extends React.Component {
  componentDidMount() {
    console.log("App mounted")
  }

  componentWillReceiveProps(props) {
  }

  render() {
    return (
      <div id='container'>
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/home'/>} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(
  mapStateToProps
)(App));
