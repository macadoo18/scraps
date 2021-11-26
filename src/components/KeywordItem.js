import React, { Component } from 'react';

class KeywordItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li key={item.id}>
        <p>I'm a keword search result!</p>
      </li>
    );
  }
}

export default KeywordItem;
