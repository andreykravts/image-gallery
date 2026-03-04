import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

//distructure object from handleSearchSubmit function
//provide word and setWord properties from app.js to search.js
const Search = ({word, setWord, handleSubmit }) => {
    return (
        // search container
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    {/* Form row */}
                    {/* on submit handleSubmit */}
                    <Form onSubmit={handleSubmit}>
                        <Row>
							{/* search */}
                            <Col xs={9}>
                                <Form.Control 
                                    type="text"
                                    // it's actually makes this input a controlled input
                                    value={word}
                                    //Any time when user change input we will update state of application - call setWord function
                                    //arrow function - get event and call other function setWord specifically
                                    onChange={(e) => setWord(e.target.value)}
                                    placeholder="Search for new image..." 
                                />
                            </Col>
							{/* button submit */}
                            <Col xs={3}>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;
