import React, { Component } from 'react';

class SignUp
 extends React.Component {
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

  let api = 'https://salty-citadel-91716.herokuapp.com'
  fetch(api, {
    method: 'POST',
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password
    })
  })

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
export default SignUp
;
