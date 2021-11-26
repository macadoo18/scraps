import React from 'react';
import Context from '../Context';

export default class SignUpPage extends React.Component {
  static contextType = Context;

  state = { error: null };

  handleRegistrationSuccess = user => {
    this.props.history.push('/login');
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { nickname, username, password, email } = ev.target;

    this.setState({ error: null });
    this.context
      .postUser({
        nickname: nickname.value,
        username: username.value,
        password: password.value,
        email: email.value,
      })
      .then(user => {
        nickname.value = '';
        username.value = '';
        password.value = '';
        email.value = '';
        this.handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <main className='signUpLogin'>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>

          <div className='inputContainer'>
            <div className='nickname'>
              <label htmlFor='nickname'>Nickname:</label>
              <input type='text' id='nickname' name='nickname' />
            </div>

            <div className='username'>
              <label htmlFor='username'>Username:</label>
              <input type='text' id='username' name='username' required />
            </div>

            <div role='alert'>
              {this.state.error &&
                this.state.error.toLowerCase().includes('username') && (
                  <p className='red'>{this.state.error}</p>
                )}
            </div>

            <div className='password'>
              <label htmlFor='password'>Password:</label>
              <input type='password' id='password' name='password' required />
            </div>

            <div role='alert'>
              {this.state.error &&
                this.state.error.toLowerCase().includes('password') && (
                  <p className='red'>{this.state.error}</p>
                )}
            </div>

            <div className='email'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />
            </div>

            <div role='alert'>
              {this.state.error && this.state.error.toLowerCase().includes('email') && (
                <p className='red'>{this.state.error}</p>
              )}
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
