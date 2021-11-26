import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/Header.scss';
import TokenService from '../token-service';
import Nav from './Nav';

export default class Header extends React.Component {
  handleLogout = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  };

  renderLogoutLink() {
    return (
      <>
        <Link className='logo' to='/ApiPage'>
          <li>Scraps</li>
        </Link>
        <Nav />
        <Link className='userLinks' onClick={this.handleLogout} to='/'>
          <li>Logout</li>
        </Link>
      </>
    );
  }

  renderLoginSignUpLinks() {
    return (
      <>
        <Link className='logo' to='/'>
          <li>Scraps</li>
        </Link>
        <Link className='userLinks' to='/signUp'>
          <li>Sign Up</li>
        </Link>
        <Link className='userLinks' to='/login'>
          <li>Login</li>
        </Link>
      </>
    );
  }

  render() {
    return (
      <nav className='header'>
        <ul>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginSignUpLinks()}
        </ul>
      </nav>
    );
  }
}
