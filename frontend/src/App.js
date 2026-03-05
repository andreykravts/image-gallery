import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import your js file:
import Header from './components/Header';
// integrate search
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';

//globla variable

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

// arrow function
const App = () => {
  //useState - Returns a stateful value, and a function to update it.
  //useState return array so we do restructuring of array word - string setWord - function
  //useState - it's react hook
  const [word, setWord] = useState('');

  //for images:
  const [images, setImages] = useState([]);

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
        //work on setImages function:
        setImages([{ ...data, title: word }, ...images]);
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

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

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
      {/* when images length grater than zero than show ImageCard  */}
      {/* !! convert images.length to boolean value */}
      {/* mt-4 margin-top-4 */}
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image, index) => {
            return (
              <Col key={index} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default App;
