import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { data } from '../../config/API_Data';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }

  logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    this.props.history.push('/login');
  };

  render() {
    const photosData = data;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              BRICK-N-BOLT
            </Typography>
            <Button color="inherit" onClick={this.logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <div className="masonry">
          {photosData.rsp.photos.photo.map(eachPhoto => {
            return (
              <Link key={eachPhoto._id} to={`/home/${eachPhoto._id}`}>
                <img
                  alt={eachPhoto._farm}
                  className="item"
                  style={{ height: `${Math.floor(Math.random() * (500 - 100 + 1)) + 100}px`, width: '300px' }}
                  src={`https://farm${eachPhoto._farm}.staticflickr.com/${eachPhoto._server}/${eachPhoto._id}_${eachPhoto._secret}.jpg`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
