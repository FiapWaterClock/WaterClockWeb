import React, {Component} from 'react'
import Input from '../shared/Input'
import {connect} from 'react-redux'
import {registerAction, redirect} from '../../core/store/actions/authActions'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            matchingPassword: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault()

        this.props.register(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.matchingPassword)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.registerSuccess) {
            this.props.redirect("/login");
            this.props.history.push('/login');
        }
    }

    render() {
        const registerError = this.props.registerError;
        let alert = "";
        if(registerError && this.state.email) {
            alert = <div className="alert alert-danger" role="alert">{registerError.error_description}</div>
        }

        return (
            
            <div className="card col-md-6" style={{margin:"0 auto", marginTop:"80px", padding:"40px"}}>                

                <form className="form-control-sm col-sm-10" style={{margin:"0 auto"}} onSubmit={this.onSubmitHandler}>

                <div className="col-sm-12">
                    <div className="text-center">
                        <h1 className="text-format-large">Cadastro</h1>
                    </div>
                </div>
                
                    <div className="form-group">
                        <Input
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChangeHandler}
                            label="Nome"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.onChangeHandler}
                            label="Sobrenome"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                            label="E-mail"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChangeHandler}
                            label="Senha"
                        />
                    </div>
                    <div className="form-group">
                        <Input
                            name="matchingPassword"
                            type="password"
                            value={this.state.matchingPassword}
                            onChange={this.onChangeHandler}
                            label="Confirme a senha"
                        />
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 offset-3">
                                <input className="btn btn-block btn-primary" style={{backgroundColor: "#00A7BD", border: 0}} type="submit" value="Cadastrar"/>
                            </div>
                        </div>
                    </div>
                </form>

                {alert}

            </div>
        )
    }
}

function mapState(state) {
    return {
        registerSuccess: state.register.success,
        registerError: state.register.error
    }
}

function mapDispatch(dispatch) {
    return {
        register: (firstName, lastName, email, password, matchingPassword) => dispatch(registerAction(firstName, lastName, email, password, matchingPassword)),
        redirect: () => dispatch(redirect())
    }
}

export default connect(mapState, mapDispatch)(Register)