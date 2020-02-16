import React, { Component } from 'react';
import { Button, TextField, Toolbar  } from '@material-ui/core';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Toolbar>
          <TextField
            label="Email"
            placeholder="Enter your email"
            type="text"
            required="true"
            variant="outlined"
          />
          <TextField
            label="Password"
            placeholder="Enter your password"
            type="password"
            required="true"
            variant="outlined"
          />
          <Button color="primary" variant="contained">Sign-in</Button>
          <Button variant="contained">Sign-up</Button>
        </Toolbar>
      </div>
    );
  }
}

export default Login;