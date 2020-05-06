import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from 'mdbreact';
import { connect } from "react-redux";
import { reset_password } from "../../redux/actions/reset-password/index";
import {
    NotificationManager,
    NotificationContainer
  } from "react-notifications";

export class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password : "",
            oldPassword:"",
            formErrors: { password: ''},
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
        let oldPassword = this.state.oldPassword;
        let password = this.state.password;
        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'password':
            let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
            let oldPasswordMatch = (oldPassword !== password)
            passwordValid = (reg.test(value) && oldPasswordMatch);
            fieldValidationErrors.password = passwordValid ? '': 'password should contain atleast 1 uppercase, 1 lowercase,1 character,1 number and 8 characters long  & not same as old Password';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      validateForm() {
        this.setState({formValid:  this.state.passwordValid});
      }
    handleSubmit(){
        let updateData={};
        updateData.password = this.state.password
        this.props.resetPassword(updateData,this.props.location.id)
        NotificationManager.success("Password Changed Successfully", "Success",5000);
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
                                    <h1>Reset Password</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="no-padding">
                                <MDBCol xl="12" lg="12" md="12" sm="12" xs="12">
                                        <input className="form-control"
                                            type="password"
                                            name="oldPassword"
                                            value={this.state.oldPassword}
                                            onChange={this.handleChange}
                                            placeholder="Enter old Password"
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
                                            placeholder="Enter New Password"
                                            style={{ backgroundColor: 'rgb(245, 248, 250)' }}
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
                <NotificationContainer/>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        ResetPasswordResponse: state.resetPasswordResponse,
    };
  };

  
  const mapDispatchToProps = dispatch => {
    return {
      resetPassword: (data,id) => dispatch(reset_password(data,id)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPassword);
