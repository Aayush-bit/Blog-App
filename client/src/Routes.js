import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NotFound404 from './components/NotFound404'

// private routes
import HomePrivate from './components/private/Home/Home'
import Users from './components/private/Users/Users'
import Posts from './components/private/Posts/Posts'
import Profile from './components/private/profilePage/Profile'

import { LoggedInContext } from './App'

function Routes() {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext)

    const unAuthRoutes = 
        <Switch>
            <Route exact path={ '/' } component={ Home } />
            <Route exact path={ '/login' }>
                <Login />
            </Route>
            <Route exact path={ '/signup' } >
                <SignUp />
            </Route>
            <Route path="*" component={ NotFound404 }/>
        </Switch>;

    const loggedInRoutes = 
        <Switch>
            <Route exact path={ '/' } component={ HomePrivate } />
            <Route exact path={ '/posts' }>
                <Posts />
            </Route>
            <Route exact path={ '/users' }>
                <Users />
            </Route>
            <Route exact path={ '/myprofile' }>
                <Profile />
            </Route>
            <Route path="*" component={ NotFound404 }/>
        </Switch>;

    return (
        <>
            { loggedIn ? loggedInRoutes : unAuthRoutes }
        </>
    )
}

export default Routes
