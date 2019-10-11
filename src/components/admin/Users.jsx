import React, {Component} from 'react'
import {connect} from "react-redux";
import {adminUsersAction} from "../../core/store/actions/adminActions";

class AdminUsersPage extends Component {

    componentDidMount() {
        this.props.getUsers();
        console.log(this.props);
    }

    render() {

        let alert = "";
        if (this.props.error) {
            alert = <div className="alert alert-danger" role="alert">{this.props.error}</div>
        }
        return (
            <div>
                <div className="text-center">
                    <h1 className="text-format-large">Clientes cadastrados</h1>
                </div>
                <table className="table table-bordered text-center">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Relógios</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user) => (
                            <tr key={user.id} >
                                <th scope="row">{user.id}</th>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.clocks}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
