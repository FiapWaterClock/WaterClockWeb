import React, {Component} from 'react'
import {adminClocksAction} from "../../core/store/actions/adminActions";
import {connect} from "react-redux";
import ClockForm from "./ClockForm";

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
                <ClockForm/>
                <table className="table table-bordered text-center">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Serial number</th>
                        <th scope="col">Instalation date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.clocks.map((clock) => (
                        <tr key={clock.id}>
                            <th scope="row">{clock.id}</th>
                            <td>{clock.serial_number}</td>
                            <td>{clock.installation_date}</td>
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
