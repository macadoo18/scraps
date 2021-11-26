import React from 'react';

const Context = React.createContext({
  apiItems: [],
  isLoaded: false,
  postUser: () => {},
  login: () => {},
});

export default Context;
