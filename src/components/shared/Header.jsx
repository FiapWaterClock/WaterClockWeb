import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        const {loggedIn, isAdmin, onLogout} = this.props

        return (
            <div className="container-fluid">
                <ul className="nav navbar-inverse">
                    <li className="nav-item">
                        <NavLink exact to="/" className="navbar-brand nav-link" activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                    {!loggedIn && <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="active">
                            Login
                        </NavLink>
                    </li>}

                    {!loggedIn && <li className="nav-item">
                        <NavLink className="nav-link" to="/register" activeClassName="active">
                            Register
                        </NavLink>
                    </li>}

                    {loggedIn && !isAdmin && <li className="nav-item">
                        <NavLink className="nav-link" to="/user/profile" activeClassName="active">
                            Profile
                        </NavLink>
                    </li>}

                    {loggedIn && isAdmin && <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/users" activeClassName="active">
                            Users
                        </NavLink>
                    </li>}

                    {loggedIn && isAdmin && <li className="nav-item">
                        <NavLink className="nav-link" to="/admin/clocks" activeClassName="active">
                            Clocks
                        </NavLink>
                    </li>}

                    {loggedIn && <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="active" onClick={onLogout}>
                            Logout
                        </NavLink>
                    </li>}
                </ul>
            </div>
        )
    }
}