import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdbreact';
import { connect } from "react-redux";
import { add_user } from "../../redux/actions/register/index";
import { Redirect, Link } from 'react-router-dom';
import {
    NotificationManager,
    NotificationContainer
  } from "react-notifications";
  import 'react-notifications/lib/notifications.css';

export class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone : "",
            email : "",
            password : "",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
          this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let email = this.state.email;
        let password = this.state.password;
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : 'Please enter valid email in the form of `abc@gmail.com`';
            break;
          case 'password':
            let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
            let emailMatch = (email !== password)
            passwordValid = (reg.test(value) && emailMatch);
            fieldValidationErrors.password = passwordValid ? '': 'password should contain atleast 1 uppercase, 1 lowercase,1 character,1 number and 8 characters long  & not same as email';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
    handleSubmit(){
        let userData = {};
        userData.email = this.state.email;
        userData.phone = this.state.phone;
        userData.password = this.state.password
        this.props.addUser(userData)
        NotificationManager.success("User Profile Created Successfully", "Success",5000);
    }
    componentDidMount = () => {
    }
    render() {
            const {status,data} = this.props.UserRegisterResponse
            if (status === 201){
            return <Redirect
                    to={{
                        pathname: "/login",
                        state: { data }
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
                                    <h1>User Register Form</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                        <input className="form-control"
                                            type="text"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.handleChange}
                                            placeholder="Enter Phone No."
                                            style={{ backgroundColor: 'rgb(245, 248, 250)' }}
                                    
                                        />
                                      
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
                                            required
                                        />
                                </MDBCol>
                                <div>
                                    <p className="field-error">{this.state.formErrors.email}</p>
                                </div>
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
                                            required
                                        />
                                </MDBCol>
                                <div>
                                    <p className="field-error">{this.state.formErrors.password}</p>
                                </div>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                        <MDBBtn
                                            className="waves-light"
                                            onClick={this.handleSubmit}
                                             disabled={!this.state.formValid}
                                        >
                                            Submit
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
                <NotificationContainer />
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
  )(RegisterForm);
