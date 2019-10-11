import React, { Component } from 'react'
import logo from './../image/wcLogo.jpg';

export default class HomePage extends Component {
    render() {
        return (
            <div style={{marginTop:"30px"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <img src={logo} height="200px" width="190px" className="mx-auto d-block" alt="WaterClockLogo"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center">
                            <p className="text-format"></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
