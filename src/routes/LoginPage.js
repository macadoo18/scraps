import React from 'react';
import Context from '../Context';
import TokenService from '../token-service';

export default class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
    onLoginSuccess: () => {},
  };

  static contextType = Context;

  state = { error: null };

  onLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/savedRecipes';
    history.push(destination);
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;

    this.context
      .login({
        username: username.value,
        password: password.value,
      })
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        this.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <main className='signUpLogin'>
        <form onSubmit={this.handleSubmitJwtAuth}>
          <h1>Login</h1>

          {this.state.error && <p className='red'>{this.state.error}</p>}

          <div className='inputContainer'>
            <div className='username'>
              <label htmlFor='username'>Username:</label>
              <input type='text' id='username' name='username' />
            </div>

            <div className='password'>
              <label htmlFor='password'>Password:</label>
              <input type='password' id='password' name='password' />
            </div>
          </div>

          <button type='submit' className='submit'>
            Submit
          </button>
        </form>
      </main>
    );
  }
}
