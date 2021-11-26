import React from 'react';
import { Route } from 'react-router-dom';
import config from './config';
import Context from './Context';
import TokenService from './token-service';
import './sass/App.scss';
import Header from './components/Header';
import LandingPage from './routes/LandingPage';
import SignUpPage from './routes/SignUpPage';
import LoginPage from './routes/LoginPage';
import ApiPage from './routes/ApiPage';
import MealPlanPage from './routes/MealPlanPage';
import RecipesPage from './routes/RecipesPage';

class App extends React.Component {
  state = {
    currentUser: '',
    savedRecipes: [],
    mealPlan: [],
  };

  postUser = user => {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  };

  login = credentials => {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  };

  getUserInfo = cb => {
    fetch(`${config.API_ENDPOINT}/users`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => res.json())
      .then(currentUser => {
        console.log(currentUser);
        this.setState({ currentUser }, cb);
      });
  };

  getUserRecipes = cb => {
    fetch(`${config.API_ENDPOINT}/recipes`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => res.json())
      .then(savedRecipes => {
        this.setState(
          {
            savedRecipes,
          },
          cb
        );
      })
      .catch(err => console.error(err));
  };

  render() {
    const contextValue = {
      ...this.state,
      postUser: this.postUser,
      login: this.login,
      // fetchRecipeApi: this.fetchRecipeApi,
    };

    return (
      <Context.Provider value={contextValue}>
        <div className='app'>
          <header>
            <Route component={Header} />
          </header>

          <main className='appMain'>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signUp' component={SignUpPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/ApiPage' component={ApiPage} />
            <Route path='/mealPlan' component={MealPlanPage} />
            <Route path='/savedRecipes' component={RecipesPage} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
