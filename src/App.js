import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(null); // Track the selected answer
  const [isSwapped, setIsSwapped] = useState(false); // Track if buttons are swapped

  const handleYesClick = () => setAnswer("yes");
  const handleNoClick = () => setIsSwapped((prev) => !prev);

  if (answer === "yes") {
    return (
      <Container className="container-full">
        <Row className="middle">
          <Col xs="auto">
            <h1 className="text-danger text-center" style={{fontWeight:"bolder", fontSize:"4rem"}}>Yes, he is gay.</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="container-full">
      {/* Row for Question */}
      <div className="middle">
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <h1 className="text-white text-center" style={{fontSize:"4rem"}}>Do you think AK(the guy in BG) is gay?</h1>
        </Col>
      </Row>

      {/* Row for Buttons */}
      <Row className="justify-content-center">
        {isSwapped ? (
          <>
            <Col xs="auto" className="mb-2">
              <Button
                variant="danger"
                size="lg"
                className="custom-button"
                onClick={handleNoClick}
                style={{fontSize:"2rem"}}
              >
                No
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="success"
                size="lg"
                className="custom-button"
                onClick={handleYesClick}
                style={{fontSize:"2rem"}}
              >
                Yes
              </Button>
            </Col>
          </>
        ) : (
          <>
            <Col xs="auto" className="mb-2">
              <Button
                variant="success"
                size="lg"
                className="custom-button"
                onClick={handleYesClick}
                style={{fontSize:"2rem"}}
              >
                Yes
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                variant="danger"
                size="lg"
                className="custom-button"
                onClick={handleNoClick}
                style={{fontSize:"2rem"}}
              >
                No
              </Button>
            </Col>
          </>
        )}
      </Row>
      </div>
    </Container>
  );
}

export default App;
