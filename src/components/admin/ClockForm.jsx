import React, {Component} from 'react'
import Input from '../shared/Input'
import {connect} from 'react-redux'
import {adminClockCreateAction, adminClocksAction} from "../../core/store/actions/adminActions";

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
        this.props.createClock({
            serial_number: this.state.serial_number,
            installation_date: this.state.installation_date
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.adminClockCreateSuccess) {
            this.props.getClocks();
            this.setState({
                serial_number: '',
                installation_date: ''
            });
        }
    }

    render() {
        const adminClockCreateError = this.props.adminClockCreateError;
        let alert = "";
        if (adminClockCreateError && this.state.serial_number) {
            alert = <div className="alert alert-danger" role="alert">{adminClockCreateError}</div>
        }

        return (
            <div>
              <h1 className="text-format-large">Registrar relógio</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <Input
                            name="serial_number"
                            value={this.state.serial_number}
                            onChange={this.onChangeHandler}
                            label="Número de série"
                        />
                    </div>
                    <div className="form-group">
                        <Input type="date"
                            name="installation_date"
                            value={this.state.installation_date}
                            onChange={this.onChangeHandler}
                            label="Data de instalação"
                        />
                    </div>

                    <div className="form-group">
                      <input className="btn btn-block btn-primary" type="submit" value="Cadastrar"/>
                    </div>
                </form>
                {alert}
                </div>
        )
    }
}


function mapDispatch(dispatch) {
    return {
        getClocks: () => dispatch(adminClocksAction()),
        createClock: (clock) => dispatch(adminClockCreateAction(clock))
    }
}

function mapState(state) {
    return {
        adminClockCreateSuccess: state.createClock.success,
        adminClockCreateError: state.createClock.error
    }
}

export default connect(mapState, mapDispatch)(ClockForm)
