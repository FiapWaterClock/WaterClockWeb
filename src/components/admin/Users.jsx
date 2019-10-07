import React, { Component } from 'react'
import {connect} from "react-redux";
import {adminUsersAction} from "../../core/store/actions/adminActions";

class AdminUsersPage extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {

        let alert = "";
        if (this.props.error) {
            alert = <div className="alert alert-danger" role="alert">{this.props.error}</div>
        }
        return (
            <div>
                {this.props.users.map((user) => (
                    <div key={user.id} className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                {user.firstName} {user.lastName} {user.email}
                            </div>
                        </div>
                    </div>
                ))}
                {alert}
            </div>
        )
    }
}

function mapState(state) {
    return {
        users: state.adminUsers.users || [],
        error: state.adminUsers.error
    }
}

function mapDispatch(dispatch) {
    return {
        getUsers: () => dispatch(adminUsersAction())
    }
}

export default connect(mapState, mapDispatch)(AdminUsersPage)
