import React, { Component } from "react";
import "./Login.css";
import { Redirect } from 'react-router-dom'

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
            <label htmlFor="name">Name</label>
            {this.state.userNameError && (
              <p className="error-message">Please enter a name.</p>
            )}
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            {this.state.userEmailError && (
              <p className="error-message">Please enter an email address.</p>
            )}
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="userEmail"
              value={this.state.userEmail}
              onChange={this.handleChange}
            />
            <label htmlFor="purpose">Purpose</label>
            {this.state.userPurposeError && (
              <p className="error-message">Please enter a purpose.</p>
            )}
            <select
              id="purpose"
              name="userPurpose"
              onChange={this.handleChange}
            >
              <option value="placeholder">--Please select a purpose--</option>
              <option value="business">Business</option>
              <option value="vacation">Vacation</option>
              <option value="other">Other</option>
            </select>
            <button
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
export default Login;
