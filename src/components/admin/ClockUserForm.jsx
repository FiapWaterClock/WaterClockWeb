import React, {Component} from 'react'
import Input from '../shared/Input'
import {connect} from 'react-redux'
import {adminClocksAction, adminLinkClockAction} from "../../core/store/actions/adminActions";

class ClockUserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clockId: '',
            userId: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault()
        this.props.linkClock({
            clockId: this.state.clockId,
            userId: this.state.userId
        });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.adminLinkClockSuccess) {
            this.props.getClocks();
            this.setState({
                clockId: '',
                userId: ''
            });
        }
    }

    render() {
        const adminLinkClockError = this.props.adminClockCreateError;
        let alert = "";
        if (adminLinkClockError && this.state.userId) {
            alert = <div className="alert alert-danger" role="alert">{adminLinkClockError}</div>
        }

        return (
            <div>
                <div className="col-sm-12">
                    <div className="text-center">
                        <h1 className="text-format-large">Vincular relógio e usuário</h1>
                    </div>
                </div>

                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <Input
                            name="userId"
                            value={this.state.userId}
                            onChange={this.onChangeHandler}
                            label="User id"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="clockId"
                            value={this.state.clockId}
                            onChange={this.onChangeHandler}
                            label="Clock id"
                        />
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-4 offset-4">
                                <input className="btn btn-block btn-primary" type="submit" value="Link"/>
                            </div>
                        </div>
                    </div>
                </form>
                {alert}
            </div>
        )
    }
}


function mapDispatch(dispatch) {
    return {
        linkClock: (ids) => dispatch(adminLinkClockAction(ids)),
        getClocks: () => dispatch(adminClocksAction())
    }
}

function mapState(state) {
    return {
        adminLinkClockSuccess: state.linkClock.success,
        adminLinkClockError: state.linkClock.error
    }
}

export default connect(mapState, mapDispatch)(ClockUserForm)