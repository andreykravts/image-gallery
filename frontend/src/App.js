import 'bootstrap/dist/css/bootstrap.min.css';
//import your js file:
import Header from "./components/Header";

// arrow function
const App = () => {
  return (
    <div className="App">
      {/* Header is html tag contain code from Header.js */}
      {/* Title now will be provided to props variable in Header.js */}
      {/* Now I can provide different properties and use them */}
      <Header title = "Image Gallery"/>
    </div>
  );
}

export default App;
