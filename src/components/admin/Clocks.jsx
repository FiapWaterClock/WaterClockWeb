import React, { Component } from 'react'
import {adminClocksAction} from "../../core/store/actions/adminActions";
import {connect} from "react-redux";

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
                {this.props.clocks.map((clock) => (
                    <div key={clock.id} className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                {clock.id} {clock.serial_number} {clock.installation_date}
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
    console.log(state);
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
