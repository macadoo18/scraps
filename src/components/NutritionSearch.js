import React, { Component } from 'react';
import Form from './styles/Form';

class NutritionSearch extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { getRecipes, handleChange } = this.props;

    return (
      <Form onSubmit={getRecipes}>
        <fieldset>
          <div>
            <label htmlFor='maxCarbs'>Max Carbs</label>
            <input
              type='number'
              name='maxCarbs'
              id='maxCarbs'
              className='nutrientInput'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='minProtein'>Min Protein</label>
            <input
              type='number'
              name='minProtein'
              id='minProtein'
              className='nutrientInput'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='maxCalories'>Max Calories</label>
            <input
              type='number'
              name='maxCalories'
              id='maxCalories'
              className='nutrientInput'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='minCalcium'>Min Calcium</label>
            <input
              type='number'
              name='minCalcium'
              id='minCalcium'
              className='nutrientInput'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='minVitaminA'>Min Vitamin A</label>
            <input
              type='number'
              name='minVitaminA'
              id='minVitaminA'
              className='nutrientInput'
              onChange={handleChange}
            />
          </div>

          <button type='submit'>Submit</button>
        </fieldset>
      </Form>
    );
  }
}

export default NutritionSearch;
