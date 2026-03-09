import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
//for svg icon
import { ReactComponent as Logo } from '../images/logo.svg';

//navbar style object
const navbarStyle = {
  backgroundColor: '#eeeeee',
};

//add parameter props

//destructure props object as parameter in the function
const Header = ({ title }) => {
  // //destructure props object
  // const { title } = props;
  return (
    // this is JSX //add object style for this particular element Navbar
    <Navbar style={navbarStyle} variant="light">
      <Container>
        {/* With help of java script insert props.title */}
        {/* <Navbar.Brand href="/">{title}</Navbar.Brand> */}
        {/* this is java script syntax */}
        <Logo style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};
//What it for?
//For import in other js files
export default Header;
