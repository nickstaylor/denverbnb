import React, { Component } from "react";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPurpose: "",
      userNameError: false,
      userEmailError: false,
      userPurposeError: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //some method that checks to see if you've filled everything out
  checkForErrors = (event) => {
    event.preventDefault();
    if (!this.state.userName) {
      this.setState({ userNameError: true });
    }
    if (!this.state.userEmail) {
      this.setState({ userEmailError: true });
    }
    if (this.state.userName) {
      this.setState({ userNameError: false });
    }
    if (this.state.userEmail) {
      this.setState({ userEmailError: false });
    }
    if (this.state.userPurpose === null) {
      this.setState({ userPurposeError: true });
    }
    if (this.state.userPurpose !== "placeholder") {
      this.setState({ userPurposeError: false });
    }
    //some error checking
    //if successful => invoke function that was passed as prop
    //if unsuccessful, trigger error message
  };

  //error message

  render() {
    return (
      <section className="login-form-background">
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
            {!this.state.userPurposeError && (
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
            <button type="submit" onClick={this.checkForErrors}>
              Login
            </button>
          </form>
        </section>
      </section>
    );
  }
}
export default Login;
