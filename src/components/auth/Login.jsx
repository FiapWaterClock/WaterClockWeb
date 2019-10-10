import React, { Component } from 'react'
import Input from '../shared/Input'
import { connect } from 'react-redux'
import { loginAction, redirect } from '../../core/store/actions/authActions'
import logo from './../../image/wcLogo.jpg';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault()
        this.props.login(this.state.email, this.state.password)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.loginSuccess) {
            this.props.redirect();
            this.props.history.push('/');
        }
    }

    render() {
        const loginError = this.props.loginError;
        let alert = "";
        if(loginError && this.state.email) {
            alert = <div className="alert alert-danger" role="alert">{loginError.error_description}</div>
        }
        return (     
            
            <div style={{margin:"0 auto", marginTop:"10px"}}>
                <img src={logo} height="200px" width="190px" className="mx-auto d-block" alt="WaterClockLogo"/>
            
            <div className="card col-md-6" style={{margin:"0 auto", marginTop:"20px", padding:"40px"}}>               
                
                <form className="form-control-sm col-sm-10" style={{margin:"0 auto"}} onSubmit={this.onSubmitHandler}>

                    <div className="col-sm-12">
                        <div className="text-center">
                            <h1 className="text-format-large">Login</h1>
                        </div>
                    </div>

                    <div className="form-group">
                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            label="E-mail"/>
                    </div>

                    <div className="form-group">
                        <Input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            label="Senha"/>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 offset-3">
                                <input className="btn btn-block btn-primary" type="submit" value="Login"/>
                            </div>
                        </div>
                    </div>
                </form>

                {alert}

            </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        loginSuccess: state.login.success,
        loginError: state.login.error
    }
}

function mapDispatch(dispatch) {
    return {
        login: (email, password) => dispatch(loginAction(email, password)),
        redirect: () => dispatch(redirect())
    }
}

export default connect(mapState, mapDispatch)(Login)