import React from "react";
import { Container, Row, Col, Navbar, Nav, Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bose</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold">Découvrez le Son Exceptionnel</h1>{" "}
            <p className="lead">
              Plongez dans une expérience sonore incomparable avec les casques
              et enceintes Bose. Nos produits allient design élégant et qualité
              audio de premier ordre, vous transportant au cœur de la musique.
            </p>{" "}
            <p>
              Que vous soyez un audiophile passionné ou que vous cherchiez
              simplement à améliorer votre expérience d'écoute quotidienne, Bose
              vous offre une immersion totale dans le monde de la musique.
            </p>
            <button className="btn btn-primary">Découvrir nos produits</button>
          </Col>
          <Col
            xs={6}
            md={4}
            className="d-flex align-items-center justify-content-end"
          >
            <img
              src="casque.png"
              alt="Casque"
              style={{ width: "250px", height: "auto" }}
              className="me-3"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <div style={{ maxWidth: "300px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{ width: "250px", height: "auto" }}
                  src="casque.png"
                />
                <Card.Body>
                  <Card.Title>Bose casque bluetooth</Card.Title>
                  <Card.Text>1200Mhz</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <div style={{ maxWidth: "300px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{ width: "250px", height: "auto" }}
                  src="casque1.png"
                />
                <Card.Body>
                  <Card.Title>Bose casque bluetooth</Card.Title>
                  <Card.Text>200Mhz</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <div style={{ maxWidth: "500px" }}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{ width: "250px", height: "auto" }}
                  src="casque3.png"
                />
                <Card.Body>
                  <Card.Title>Bose baffle bluetooth</Card.Title>
                  <Card.Text>50Mhz</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
