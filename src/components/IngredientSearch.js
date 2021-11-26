import React from 'react';
import Form from './styles/Form';

export default class IngredientSearch extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { getRecipes, ingredientInput } = this.props;

    return (
      <Form onSubmit={getRecipes}>
        <div className='search'>
          <label htmlFor='ingredients'>What's in your fridge?</label>

          <input
            type='text'
            name='search'
            id='ingredients'
            className='ingredients'
            onChange={ingredientInput}
          />
        </div>

        <button className='submit' type='submit'>
          Submit
        </button>
      </Form>
    );
  }
}
