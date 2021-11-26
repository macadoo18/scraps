import React from 'react';
import Context from '../Context';
import '../sass/IngredientItem.scss';

export default class IngredientItem extends React.Component {
  static contextType = Context;

  render() {
    const { item, getInstructions } = this.props;
    console.log(item);
    // title, image(url string), missedIngredientCount,
    // missedIngredients(array).name/.original/.unitShort
    // unusedIngredients(array of searched ingredients)
    // usedIngredients(array of detailed searched ingredients).name/.original/.unitShort

    return (
      <li className='listItem'>
        <div className='titleImg'>
          <h2>{item.title}</h2>
          <p>
            <img src={item.image} alt={item.title} />
          </p>
        </div>

        <div className='ingredientList'>
          <h3>What you have:</h3>
          <ul>
            {item.usedIngredients.map((info, index) => (
              <li key={index}>{info.original}</li>
            ))}
          </ul>

          <h3>Missed Ingredients:</h3>
          <ul>
            {item.missedIngredients.map((info, index) => (
              <li key={index}>{info.original}</li>
            ))}
          </ul>
        </div>

        {/* <button onClick={getInstructions(item.id)}>Get instructions!</button> */}
      </li>
    );
  }
}
