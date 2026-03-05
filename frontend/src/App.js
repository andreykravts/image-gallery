import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import your js file:
import Header from './components/Header';
// integrate search
import Search from './components/Search';

//globla variable

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// arrow function
const App = () => {
  //useState - Returns a stateful value, and a function to update it.
  //useState return array so we do restructuring of array word - string setWord - function
  //useState - it's react hook
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    //with this method - page not gonna be reloaded each time when user ckick on button
    e.preventDefault();
    //get value in the search input window
    // e - event - whole object
    // e.target[0].value - value that user input in the search window
    console.log(word);

    //fetch return promise - I should resolve promise
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`,
    )
      //resolve promise with .then
      .then((res) => res.json())
      //.then also return promise - I should resolve that promise with: .then
      .then((data) => {
        console.log(data);
      })
      //if promise is rejected create catch:
      // When the Promise is rejected. - for example some error accured during fetch request
      .catch((err) => {
        console.log(err);
      });

    // To cleanup after push search button
    setWord('');
  };
  //access variables from .env.local file stored in frontend file
  // console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div className="App">
      {/* Header is html tag contain code from Header.js */}
      {/* Title now will be provided to props variable in Header.js */}
      {/* Now I can provide different properties and use them */}
      <Header title="Image Gallery" />
      {/* Integrate search: */}
      {/* provide variables word, setWord to search */}
      {/* Now we can use properties word, setWord inside of search compounent  */}
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
