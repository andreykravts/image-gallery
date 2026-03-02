import React from "react";
import { Navbar } from "react-bootstrap";

//add parameter props

//destructure props object as parameter in the function
const Header = ({title}) => {
	// //destructure props object
	// const { title } = props;
	return (
		
		// this is JSX
		<Navbar bg="light" data-bs-theme="light">
			{/* With help of java script insert props.title */}
	        <Navbar.Brand href="/">{title}</Navbar.Brand>
	    </Navbar>
	)
}
//What it for?
//For import in other js files
export default Header;