import React, { Component } from "react";
import "./Login.css";
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPurpose: "placeholder",
      userNameError: false,
      userEmailError: false,
      userPurposeError: false,
      completedForm: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //some method that checks to see if you've filled everything out
  checkForErrors = (event) => {
    event.preventDefault();

    this.setState({userNameError: false,
      userEmailError: false,
      userPurposeError: false,})

    if (!this.state.userName) {
      this.setState({ userNameError: true });
    }

    if (!this.state.userEmail) {
      this.setState({ userEmailError: true });
    }

    if (this.state.userPurpose === "placeholder") {
      this.setState({ userPurposeError: true });
    }

    this.updateUser();
  };

  updateUser = () => {
    if (
      this.state.userName !== "" &&
      this.state.userEmail !== "" &&
      this.state.userPurpose !== "placeholder"
    ) {
      this.setState({completedForm: true})
      const user = {
        userName: this.state.userName,
        userEmail: this.state.userEmail,
        userPurpose: this.state.userPurpose,
      };
      this.props.addUser(user);
      return <Redirect to='/areas' />
    }
  }


  render() {

    return (
      <section className="login-form-background">
      <h2>Welcome to <span>denverbnb</span>!</h2>
      {this.state.completedForm && <Redirect to='/areas' />}
        <section className="login-form-container">
          <form className="login-form">
            <label htmlFor="userName">Name</label>
            {this.state.userNameError && (
              <p className="error-message">Please enter a name.</p>
            )}
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="name"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            {this.state.userEmailError && (
              <p className="error-message">Please enter an email address.</p>
            )}
            <label htmlFor="userEmail">Email</label>
            <input
              type="text"
              name="userEmail"
              id="userEmail"
              placeholder="email"
              value={this.state.userEmail}
              onChange={this.handleChange}
            />
            <label htmlFor="userPurpose">Purpose</label>
            {this.state.userPurposeError && (
              <p className="error-message">Please enter a purpose.</p>
            )}
            <select
              id="userPurpose"
              name="userPurpose"
              onChange={this.handleChange}
            >
              <option value="placeholder">--Please select a purpose--</option>
              <option value="business">Business</option>
              <option value="vacation">Vacation</option>
              <option value="other">Other</option>
            </select>
            <button className="login-button"
              type="submit"
              onClick={(event) => this.checkForErrors(event)}
            >
              Login
            </button>
          </form>
        </section>
      </section>

    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func
}

export default Login;
