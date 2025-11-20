import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="display-4">About BadgerFest 2025</h1>
          <p className="lead">UW-Madison's Annual Music & Arts Celebration</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8}>
          <Card>
            <Card.Body>
              <Card.Title>Event Information</Card.Title>
              <Card.Text>
                BadgerFest is UW-Madison's premier music and arts festival, bringing together 
                students, faculty, and the Madison community for two days of incredible 
                performances, art exhibitions, and local food.
              </Card.Text>
              <Card.Text>
                <strong>When:</strong> April 25-26, 2025<br />
                <strong>Where:</strong> Library Mall, UW-Madison Campus<br />
                <strong>Admission:</strong> Free for UW Students with ID, $10 General Admission
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Quick Facts</Card.Title>
              <ul className="list-unstyled">
                <li>🎵 20+ Performing Artists</li>
                <li>🎨 Art Installations</li>
                <li>🍔 15+ Food Vendors</li>
                <li>🎪 Multiple Stages</li>
                <li>👥 Expected 5,000+ Attendees</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Project Information</Card.Title>
              <Card.Text>
                This website is developed as part of CS571: Building User Interfaces at 
                UW-Madison. The goal is to create an interactive platform where festival-goers 
                can explore the lineup, plan their schedule, and get all the information they 
                need for an amazing BadgerFest experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
