import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../sentablogo.png";
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            className="d-inline-block align-top "
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Jobs</Nav.Link>
			      <Nav.Link href="#pricing">Blogs and News</Nav.Link>
			      <Nav.Link href="#pricing">Contact Us</Nav.Link> */}
          </Nav>

          <Nav>
            <Nav.Link href="#home">
              <b>HOME</b>
            </Nav.Link>
            <Nav.Link href="#about">
              <b>ABOUT US</b>
            </Nav.Link>
            <Nav.Link href="#jobs">
              <b>JOBS</b>
            </Nav.Link>
            <Nav.Link href="#blogs">
              <b>BLOGS & NEWS</b>
            </Nav.Link>
            <Nav.Link href="#contact">
              <b>CONTACT US</b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
