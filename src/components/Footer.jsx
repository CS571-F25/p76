import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h2 className="h5">BadgerFest 2025</h2>
            <p className="small mb-2">
              UW-Madison's Premier Music & Arts Festival
            </p>
            <p className="small text-white-50">
              April 25-26, 2025 | Library Mall
            </p>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <h3 className="h6">Quick Links</h3>
            <ul className="list-unstyled small">
              <li><a href="#/" className="text-white-50 text-decoration-none">Home</a></li>
              <li><a href="#/lineup" className="text-white-50 text-decoration-none">Lineup</a></li>
              <li><a href="#/schedule" className="text-white-50 text-decoration-none">My Schedule</a></li>
              <li><a href="#/about" className="text-white-50 text-decoration-none">About</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h3 className="h6">Contact</h3>
            <p className="small text-white mb-1">
              Email: info@badgerfest.wisc.edu
            </p>
            <p className="small text-white mb-1">
              Phone: (608) 555-FEST
            </p>
          </Col>
        </Row>
        <Row className="mt-3 pt-3 border-top border-secondary">
          <Col className="text-center">
            <p className="small text-white-50 mb-0">
              © 2025 BadgerFest | CS571 Web Project | UW-Madison
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}