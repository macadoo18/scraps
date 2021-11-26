import React, { Component } from 'react';

class NutritionItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li>
        <p>I'm a nutrition search result!</p>
        <p>{console.log(item)}</p>
      </li>
    );
  }
}

export default NutritionItem;
