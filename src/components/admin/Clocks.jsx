import React, {Component} from 'react'
import {adminClocksAction} from "../../core/store/actions/adminActions";
import {connect} from "react-redux";
import ClockForm from "./ClockForm";
import ClockUserForm from "./ClockUserForm";

class AdminClocksPage extends Component {

    componentDidMount() {
        this.props.getClocks();
    }

    render() {
        let alert = "";
        if (this.props.error) {
            alert = <div className="alert alert-danger" role="alert">{this.props.error}</div>;
        }
        return (
            <div>
              <div class="row formclock">
              <div class="col-6">
              <ClockForm/>
              </div>
              <div class="col-6">
              <ClockUserForm/>
              </div>
              </div>
                <div class="text-center">
                <h1 className="text-format-large">Relação relógio usuário</h1>
                </div>
            <table className="table table-bordered text-center">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Número de série</th>
                    <th scope="col">Data instalação</th>
                    <th scope="col">Id usuário</th>
                </tr>
                </thead>
                <tbody>
                {this.props.clocks.map((clock) => (
                    <tr key={clock.id}>
                        <th scope="row">{clock.id}</th>
                        <td>{clock.serial_number}</td>
                        <td>{clock.installation_date}</td>
                        <td>{clock.user}</td>
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
        clocks: state.adminClocks.clocks || [],
        error: state.adminClocks.error
    }
}

function mapDispatch(dispatch) {
    return {
        getClocks: () => dispatch(adminClocksAction())
    }
}

export default connect(mapState, mapDispatch)(AdminClocksPage)
