import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

// ROUTES //
// public 
import Home from './pages/public/Home/Home'
import Login from './pages/public/Login'
import SignUp from './pages/public/SignUp'
import Posts from './pages/Posts/Posts'
import Users from './pages/Users/Users'
import MyPosts from './pages/private/MyPosts'

// private 
import HomePrivate from './pages/private/Home/Home'
import Profile from './pages/private/profilePage/Profile'


// common 
import NotFound404 from './pages/NotFound404'
// import UnderConstruction from './pages/UnderConstruction'


// CONTEXTS //
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
            <Route exact path={ '/posts' }>
                <Posts />
            </Route>
            <Route exact path={ '/users' }>
                <Users/>
            </Route>
            <Route path="*" component={ NotFound404 }/>
        </Switch>;

    // routes when user is authenticated
    const loggedInRoutes = 
        <Switch>
            <Route exact path={ '/dashboard' } component={ HomePrivate } />
            <Route exact path={ '/myprofile' }>
                <Profile />
            </Route>
            <Route exact path={ '/posts' }>
                <Posts />
            </Route>
            <Route exact path={ '/users' }>
                <Users/>
            </Route>
            <Route path={'/myposts'} component={ MyPosts } />
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
