import React, {Component} from 'react'
import Input from '../shared/Input'
import {connect} from 'react-redux'
import {adminClockCreateAction} from "../../core/store/actions/adminActions";
import {redirect} from "../../core/store/actions/authActions";

class ClockForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serial_number: '',
            installation_date: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault()

        this.props.createClock({serial_number: this.state.serial_number, installation_date: this.state.installation_date})
    }


    componentWillReceiveProps(newProps) {
        if (newProps.adminClockCreateSuccess) {
            this.props.redirect();
        }
    }

    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <div className="text-center">
                        <h1 className="text-format-large">Clock Register</h1>
                    </div>
                </div>

                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <Input
                            name="serial_number"
                            value={this.state.serial_number}
                            onChange={this.onChangeHandler}
                            label="Serial number"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="installation_date"
                            value={this.state.installation_date}
                            onChange={this.onChangeHandler}
                            label="Instalation date"
                        />
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-4 offset-4">
                                <input className="btn btn-block btn-primary" style={{backgroundColor: "#00A7BD", border: 0}} type="submit" value="Register"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


function mapDispatch(dispatch) {
    return {
        createClock: (clock) => dispatch(adminClockCreateAction(clock)),
        redirect: () => dispatch(redirect("/clocks"))
    }
}

function mapState(state) {
    return {
        adminClockCreateSuccess: state.createClock.success,
        adminClockCreateError: state.createClock.error
    }
}

export default connect(mapState, mapDispatch)(ClockForm)