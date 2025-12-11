import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="display-4">About BadgerFest</h1>
          <p className="lead">UW-Madison's Premier Music & Arts Festival</p>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <h2 className="h4 mb-3">Our Mission</h2>
          <p>
            BadgerFest brings together the best of Madison's music and arts scene for two incredible days of performances, 
            exhibitions, and community celebration. Located in the heart of campus at Library Mall, this free festival 
            showcases both emerging and established artists from across Wisconsin and beyond.
          </p>

          <h2 className="h4 mb-3 mt-4">Festival Details</h2>
          <p>
            <strong>When:</strong> April 25-26, 2025<br />
            <strong>Where:</strong> Library Mall, UW-Madison Campus<br />
            <strong>Admission:</strong> Free and open to all
          </p>

          <h2 className="h4 mb-3 mt-4">What to Expect</h2>
          <ul>
            <li>Live performances on three stages</li>
            <li>Interactive art installations</li>
            <li>Local food vendors</li>
            <li>Student artwork showcase</li>
            <li>Community engagement activities</li>
          </ul>

          <h2 className="h4 mb-3 mt-4">Contact Us</h2>
          <p>
            Have questions? Reach out to us at <a href="mailto:info@badgerfest.wisc.edu">info@badgerfest.wisc.edu</a> or 
            call (608) 555-FEST.
          </p>
        </Col>
      </Row>
    </Container>
  );
}