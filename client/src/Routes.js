import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

// ROUTES //
// public 
import Home from './pages/public/Home/Home'
import Login from './pages/public/Login'
import SignUp from './pages/public/SignUp'

// private 
import HomePrivate from './pages/private/Home/Home'
import Profile from './pages/private/profilePage/Profile'
import MyPosts from './pages/private/MyPosts/MyPosts'
import CreatePost from './pages/private/CreatePost/CreatePost'
import EditPost from './pages/private/EditPost/EditPost'
import EditProfile from './pages/private/EditProfilePage/EditProfilePage'


// common 
import NotFound404 from './pages/NotFound404'
import Posts from './pages/Posts/Posts'
import Users from './pages/Users/Users'
import User from './pages/User/User'
import FullPost from './pages/FullPost/FullPost'
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
            <Route exact path={ '/user/profile/:userId' }>
                <User/>
            </Route>
            <Route exact path={ '/post/:userId/:postId' }>
                <FullPost/>
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
            <Route exact path={ '/user/profile/:userId' }>
                <User/>
            </Route>
            <Route exact path={ '/myprofile/edit' }>
                <EditProfile />
            </Route>
            <Route exact path={'/myposts'} component={ MyPosts } />
            <Route exact path={'/post/create'} component={ CreatePost } />
            <Route exact path={'/post/edit/:postId'} component={ EditPost } />
            <Route exact path={ '/post/:userId/:postId' }>
                <FullPost/>
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
