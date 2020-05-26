import React from 'react';
import logo from './logo.svg';
import './Grid.css';
import './drop.css';
import Grid from './Grid.tsx';
import Drop from './drop.tsx';
import Weather from './weather.tsx';
import RemoteDataBinding from './RGrid.tsx';
import QueryBuilder from './QueryBuilder.jsx';

function App() {
  return (
    <div className="App">
      <Drop/>
      <QueryBuilder/>
      
    </div>
  );
}

export default App;
