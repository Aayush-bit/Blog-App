import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Posts from './components/Posts/Posts'
import SignUp from './components/SignUp/SignUp'
import Users from './components/Users/Users'

function Routes([token, setToken]) {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/posts' component={Posts} />
                <Route exact path='/users' component={Users} />
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

export default Routes
