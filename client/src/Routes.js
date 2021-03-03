import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login'
import Posts from './components/Posts/Posts'
import SignUp from './components/SignUp'
import Users from './components/Users/Users'

function Routes({ token, setToken }) {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/posts'>
                    <Posts token={token} />
                </Route>
                <Route exact path='/users'>
                    <Users token={token} />
                </Route>
                <Route exact path='/login' >
                    <Login setToken={setToken} />
                </Route>
                <Route exact path='/signup' >
                    <SignUp setToken={setToken} />
                </Route>
            </Switch>
        </div>
    )
}

Routes.propTypes = {
    setToken: PropTypes.func//.isRequired
}

export default Routes
