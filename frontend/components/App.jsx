import React from 'react';
import MastheadContainer from './Masthead/masthead_container';

const App = ({ children }) => (
  <div>
    <MastheadContainer />
    { children }
  </div>
);

export default App;
