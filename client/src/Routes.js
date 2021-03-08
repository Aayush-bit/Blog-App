import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login'
import Posts from './components/Posts/Posts'
import SignUp from './components/SignUp'
import Users from './components/Users/Users'
import NotFound404 from './components/NotFound404'

function Routes() {
    return (
        <div>
            {/* if the user is not logged in */}
            <Switch>
                <Route exact path={ '/' } component={ Home } />
                <Route exact path={ '/posts' }>
                    <Posts />
                </Route>
                <Route exact path={ '/users' }>
                    <Users />
                </Route>
                <Route exact path={ '/login' }>
                    <Login />
                </Route>
                <Route exact path={ '/signup' } >
                    <SignUp />
                </Route>
                <Route component={ NotFound404 }/>
            </Switch>
        </div>
    )
}

export default Routes
