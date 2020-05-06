import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdbreact';
import { Redirect, Link } from 'react-router-dom';
import {
    NotificationManager,
    NotificationContainer
  } from "react-notifications";
  import 'react-notifications/lib/notifications.css';

export class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount = () => {
    }
    render() {
      
        return (

            <>
                <MDBRow>
                    <MDBCol xl="3" lg="3" md="3" sm="12" xs="12">
                    </MDBCol>
                    <MDBCol className="dashboard-content-div" xl="6" lg="6" md="6" sm="12" xs="12">
                        <MDBContainer>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                    <h1>User Logged In</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                <Link to={
                                    { 
                                        pathname: "/reset-password",
                                        id: this.props.location.state.id
                                    }
                                }>Reset Password</Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol xl="3" lg="3" md="3" sm="12" xs="12">

                    </MDBCol>
                </MDBRow>
                <NotificationContainer />
            </>
        );
    }
}
  
 export default UserProfile;
