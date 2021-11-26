import React from 'react';
import Context from '../Context';
import config from '../config';
import '../sass/ApiPage.scss';
import IngredientItem from '../components/IngredientItem';
import KeywordItem from '../components/KeywordItem';
import NutritionItem from '../components/NutritionItem';
import IngredientSearch from '../components/IngredientSearch';
import KeywordSearch from '../components/KeywordSearch';
import NutritionSearch from '../components/NutritionSearch';
import SearchSection from '../components/styles/SearchSection';

export default class ApiPage extends React.Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      value: '',
      apiItems: [],
      searchInput: '',
      instructions: [],
      maxCarbs: 0,
      minProtein: 0,
      maxCalories: 0,
      minCalcium: 0,
      minVitaminA: 0,
    };
  }

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val,
    });
  };

  handleSearchInput = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleDropdownChange = e => {
    this.setState({ value: e.target.value });
  };

  // queryParams = params => {
  //   const queryItems = Object.keys(params).map(key => `${key}=${params[key]}`);
  //   return queryItems.join('&');
  // };

  // make form components for each selected dropdown item
  // display form component given selected dropdown item
  render() {
    let { isLoaded, apiItems, searchInput, value, params } = this.state;
    // const queryParams = this.queryParams(params);
    const apiUrl = 'https://api.spoonacular.com/recipes';

    console.log('items', apiItems);
    console.log('isloaded', isLoaded);

    const getIngredientRecipes = e => {
      e.preventDefault();
      fetch(
        `${apiUrl}/findByIngredients?${config.API_KEY}&ingredients=${searchInput}&number=10`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            isLoaded: true,
            apiItems: data,
          });
        });
    };

    const getNutritionRecipes = e => {
      e.preventDefault();
      fetch(
        `${apiUrl}/findByNutrients?${config.API_KEY}&maxCarbs=${this.state.maxCarbs}&number=10`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            apiItems: data,
          });
        });
    };

    // const getInstructions = id => {
    //   fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions`)
    //     .then(res => res.json())
    //     .then(data => {
    //       this.setState({
    //         instructions: data,
    //       });
    //     });
    // };

    return (
      <div className='apiPageMain'>
        <h1>Recipes</h1>

        <SearchSection>
          <div className='dropdown'>
            <p>
              <label htmlFor='search'>Search by:</label>
            </p>
            <select onChange={this.handleDropdownChange}>
              <option value='ingredients'>Ingredients</option>
              <option value='keyword'>Keyword</option>
              <option value='nutrition'>Nutrition</option>
            </select>
          </div>

          <div className='dropdownOption'>
            {value === 'keyword' ? (
              <KeywordSearch />
            ) : value === 'nutrition' ? (
              <NutritionSearch
                // nutritionInput={this.handleSearchInput}
                getRecipes={getNutritionRecipes}
                handleChange={this.handleChange}
                // queryParams={this.queryParams}
              />
            ) : (
              <IngredientSearch
                ingredientInput={this.handleSearchInput}
                getRecipes={getIngredientRecipes}
              />
            )}
          </div>
        </SearchSection>

        <section className='listSection'>
          <ul className='list'>
            {apiItems.map(item =>
              value === 'keyword' ? (
                <KeywordItem item={item} />
              ) : value === 'nutrition' ? (
                <NutritionItem key={item.id} item={item} />
              ) : (
                <IngredientItem
                  key={item.id}
                  item={item}
                  // getInstructions={getInstructions}
                />
              )
            )}
          </ul>
        </section>
      </div>
    );
  }
}
