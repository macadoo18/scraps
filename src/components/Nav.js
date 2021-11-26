import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/Nav.scss';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className='navLinks'>
          <li>
            <Link to='/mealPlan'>Meal Plan</Link>
          </li>
          <li>
            <Link to='/savedRecipes'>Saved Recipes</Link>
          </li>
          <li>
            <Link to='/ApiPage'>Search Recipes</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
