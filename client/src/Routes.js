import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

// public routes
import Home from './pages/public/Home/Home'
import Login from './pages/public/Login'
import SignUp from './pages/public/SignUp'

// private routes
import HomePrivate from './pages/private/Home/Home'
import Users from './pages/private/Users/Users'
import Posts from './pages/private/Posts/Posts'
import Profile from './pages/private/profilePage/Profile'

// common routes
import NotFound404 from './pages/NotFound404'

import { LoggedInContext } from './App'

function Routes() {
    const [loggedIn, setLoggedIn] = useContext(LoggedInContext) // declared to check in the following code whether user is logged in or not

    // routes when user is not authenticated
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

    // routes when user is authenticated
    const loggedInRoutes = 
        <Switch>
            <Route exact path={ '/dashboard' } component={ HomePrivate } />
            <Route exact path={ '/posts' }>
                <Posts />
            </Route>
            <Route exact path={ '/users' }>
                {/* <Users /> */}
                <NotFound404/>
            </Route>
            <Route exact path={ '/myprofile' }>
                <Profile />
            </Route>
            <Route path="*" component={ NotFound404 }/>
        </Switch>;

    return (
        <>
            {/* Conditional rendering for routes */}
            { loggedIn ? loggedInRoutes : unAuthRoutes }
        </>
    )
}

export default Routes
