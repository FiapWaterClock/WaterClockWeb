import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './components/shared/Header'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/Home'
import AdminUsers from './components/admin/Users'
import AdminClocks from './components/admin/Clocks'
import { connect } from 'react-redux'
import { logoutAction } from './core/store/actions/authActions'
import Footer from "./components/shared/Footer"
import NothingFound from "./components/shared/NothingFound"

class App extends Component {
    constructor(props) {
        super(props)

        this.onLogout = this.onLogout.bind(this)
    }

    onLogout() {
        this.props.logout()
        this.props.history.push('/')
    }

    isLoggedIn() {
        return localStorage.getItem('authToken');
    }

    isAdmin(){
        let scope = localStorage.getItem("scope");
        return scope && scope.split(' ').includes('write_privilege');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={this.isLoggedIn()} isAdmin={this.isAdmin()} onLogout={this.onLogout}/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/admin/users" component={AdminUsers}/>
                        <Route path="/admin/clocks" component={AdminClocks}/>
                        <Route component={NothingFound}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapState(state) {
    return {}
}

function mapDispatch(dispatch) {
    return {
        logout: () => dispatch(logoutAction())
    }
}

export default withRouter(connect(mapState, mapDispatch)(App))