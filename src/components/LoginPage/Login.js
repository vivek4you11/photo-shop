import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import image from '../../House.jpg';
import { userDetails } from './../../config/Userdetails';
import validateLoginInput from './validateLoginInput';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    const { errors, isValid } = validateLoginInput(userData);
    if (errors) {
      this.setState({
        errors
      });
    }
    if (isValid) {
      const validUser = userDetails.email === userData.email;
      const validPassword = userDetails.password === userData.password;

      if (validUser && validPassword) {
        localStorage.setItem('user', userDetails.email);
        localStorage.setItem('password', userDetails.password);
        this.props.history.push('/home');
      }
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <Grid container className="loginContainer">
        <Grid item xs={false} sm={4} md={7} className="imageContainer" />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className="formContainer">
            <div>
              <img alt="loading..." style={{ height: '200px', width: '300px' }} src={image} />
            </div>
            <br />
            <br />
            <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
              <TextField
                variant="outlined"
                value={email}
                onChange={this.onChange}
                error={errors.email ? true : false}
                helperText={errors.email}
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                value={password}
                onChange={this.onChange}
                error={errors.password ? true : false}
                helperText={errors.password}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              />
              <br />
              <br />
              <Button type="submit" fullWidth variant="contained" color="primary">
                Sign In
              </Button>
              <br />
              <br />
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                  Brick and Bolt
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Login);
