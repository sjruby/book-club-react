import React, { Component } from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
  event.preventDefault();
  console.log('Someone tried to login!: ' + this.state.email);

}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Email
          <input
            name="email"
            type="text"
            email={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        Enter Password Below
          <input
            name="password"
            type="password"
            password={this.state.password}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
;
export default SignIn;
