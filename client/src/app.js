import React from 'react';
import ReactDOM from 'react-dom';
import CharactersContainer from './containers/CharactersContainer'

window.onload = function(){
  ReactDOM.render(
    <CharactersContainer/>,
    document.getElementById('app')
  )
}
