import React, {useState, useEffect} from 'react';
import CharacterPage from './components/CharacterPage';
import axios from 'axios'
import './App.css';
//import Character from './components/Character';

const App = () => {
  //const [rmCharacters, rmCharUpdate] = useState(); //Do I need this const here?

  //Haven't tested yet, but I want to try pulling data from CharacterPage, first
  //Nope, that attempt failed again. Uncommenting code below and will try this.
  const [rmContent, rmUpdate] = useState();
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/1,2,3,7,8,14,24,26,40,47,150,244,265,372')
      .then(fetchedRM => {
        debugger
        console.log('fetchedRM.data is ', fetchedRM.data);
        let passedRM = fetchedRM.data;
        rmUpdate(passedRM);
        debugger
        console.log('passedRM is ', passedRM);
        console.log('rmContent is ', rmContent);
      })
      .catch(rmError => {
        console.log('Error in App.js getting data from api');
      })
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  debugger
  let tempVar = rmContent;
  console.log('tempVar is ', tempVar);
  debugger

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/*
        tempVar.map(function(tempObj, tempIndex) {
          return '';
        })
      */}
      <CharacterPage rmData={tempVar} />
    </div>
  );
}

export default App;
