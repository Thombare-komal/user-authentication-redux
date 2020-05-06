import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdbreact';
import { connect } from "react-redux";
import { add_user } from "../../redux/actions/register/index";
import { Redirect } from 'react-router-dom';
import {
    NotificationManager
  } from "react-notifications";
  import 'react-notifications/lib/notifications.css';

export class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email : "",
            password : "",
            isloggedIn : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
          });
    }
   async handleSubmit(){
    if(this.props.location.state !== undefined){
        const {email,password} = this.props.location.state.data;
        if(this.state.email === email && this.state.password === password){
            NotificationManager.success("Login SuccessFul", "Success",3000);
           await this.setState({
                isloggedIn : true
            })
        }
        else{
            NotificationManager.error("Login Failure", "Error",3000);
        }
    }
        
    }
    componentDidMount = () => {
    }
    render() {
        if(this.props.location.state !== undefined){
            const {id} = this.props.location.state.data;
            if(this.state.isloggedIn){
                return  <Redirect
                to={{
                    pathname: "/user-profile",
                    state: { id }
                }}
            />
            }
         }
         else{
            return  <Redirect
            to={{
                pathname: "/"
            }}
            /> 
         }
        return (

            <>
                <MDBRow>
                    <MDBCol xl="3" lg="3" md="3" sm="12" xs="12">
                    </MDBCol>
                    <MDBCol className="dashboard-content-div" xl="6" lg="6" md="6" sm="12" xs="12">
                        <MDBContainer>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                    <h1>User Login</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                        <input className="form-control"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            placeholder="Enter Email id"
                                            style={{ backgroundColor: 'rgb(245, 248, 250)' }}
                                        />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                        <input className="form-control"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            placeholder="Enter Password"
                                            style={{ backgroundColor: 'rgb(245, 248, 250)' }}
                                        />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                        <MDBBtn
                                            className="waves-light"
                                            onClick={this.handleSubmit}
                                        >
                                            Login
                                          </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="6" lg="6" md="12" sm="12" xs="12">
                                
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding top-space">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                   
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol xl="3" lg="3" md="3" sm="12" xs="12">

                    </MDBCol>
                </MDBRow>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
      UserRegisterResponse: state.userRegisterResponse,
    };
  };

  
  const mapDispatchToProps = dispatch => {
    return {
      addUser: data => dispatch(add_user(data)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm);
