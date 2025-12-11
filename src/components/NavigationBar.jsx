import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavigationBar({ darkMode, toggleDarkMode }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>🎵 BadgerFest 2025</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/lineup">
              <Nav.Link>Lineup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/schedule">
              <Nav.Link>My Schedule</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button 
            variant="outline-light" 
            size="sm" 
            onClick={toggleDarkMode}
            className="ms-3"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={darkMode}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}