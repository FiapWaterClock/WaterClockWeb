import React, { Component } from 'react'
import {connect} from "react-redux";
import {userProfileAction} from "../../core/store/actions/userActions";

class UserProfilePage extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {

        let alert = "";
        if (this.props.error) {
            alert = <div className="alert alert-danger" role="alert">{this.props.error}</div>
        }
        return (
            <div>
                <div key={this.props.user.id} className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                          <h1>Olá {this.props.user.firstName},</h1>
                            <h2>Em breve entraremos em contato, por intermédio do email {this.props.user.email} para agendarmos o ligamento do seu WaterClock
                            </h2>
                        </div>
                    </div>
                </div>
                {alert}
            </div>
        )
    }
}

function mapState(state) {
    return {
        user: state.userProfile.user || {},
        error: state.userProfile.error || null
    }
}

function mapDispatch(dispatch) {
    return {
        getUser: () => dispatch(userProfileAction())
    }
}

export default connect(mapState, mapDispatch)(UserProfilePage)
